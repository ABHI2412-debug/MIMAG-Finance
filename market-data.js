/**
 * market-data.js — MIMAG Finance
 * ─────────────────────────────────────────────────────────────────────
 * Fetches live Indian market data from GET /api/market (served by the
 * local dev-server, which proxies Yahoo Finance v8/chart server-side).
 *
 * TO REVERT:
 *   1. Remove <script src="./market-data.js?v=1" defer> from index.html
 *   2. Delete this file.
 *   That's it — hardcoded fallback values in app.js stay untouched.
 * ─────────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  const REFRESH_MS = 60_000;   // re-fetch every 60 s

  /* ── IST market hours ─────────────────────────────────────────────── */
  function isMarketOpen() {
    const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 3600000);
    const d   = ist.getDay();
    if (d === 0 || d === 6) return false;
    const hm  = ist.getHours() * 100 + ist.getMinutes();
    return hm >= 915 && hm <= 1530;
  }

  /* ── Fetch from local dev-server proxy ───────────────────────────── */
  async function fetchMarketData() {
    const ctrl = new AbortController();
    const t    = setTimeout(() => ctrl.abort(), 8000);
    try {
      const r = await fetch('/api/market', { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } finally {
      clearTimeout(t);
    }
  }

  /* ── Formatting ───────────────────────────────────────────────────── */
  const fmt2   = v => v == null ? '–' : (+v).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtInt = v => v == null ? '–' : Math.round(+v).toLocaleString('en-IN');
  const fmtPct = p => p == null ? '–' : `${+p >= 0 ? '+' : ''}${(+p).toFixed(2)}%`;

  /* ── Update Market Intelligence card ─────────────────────────────── */
  function updateMICard(data) {
    const rows = [
      { key: 'nifty50',   valFn: d => d.price,        fmt: fmt2   },
      { key: 'sensex',    valFn: d => d.price,        fmt: fmt2   },
      { key: 'niftybank', valFn: d => d.price,        fmt: fmt2   },
      { key: 'usdinr',    valFn: d => d.price,        fmt: fmt2   },
      { key: 'gold',      valFn: d => d.priceInr10g,  fmt: fmtInt },
    ];
    for (const { key, valFn, fmt } of rows) {
      const item  = data[key];
      if (!item)  continue;
      const val   = valFn(item);
      const chgPct = item.chgPct;

      const valEl = document.getElementById(`mi-val-${key}`);
      const chgEl = document.getElementById(`mi-chg-${key}`);
      if (!valEl || !chgEl || val == null) continue;

      valEl.style.opacity = '0';
      setTimeout(() => { valEl.textContent = fmt(val); valEl.style.opacity = '1'; }, 160);
      chgEl.textContent = fmtPct(chgPct);
      chgEl.className   = `mi-col-chg ${(chgPct ?? 0) >= 0 ? 'text-green' : 'text-red'}`;
    }
  }

  /* ── Update ticker strip ──────────────────────────────────────────── */
  function updateTicker(data) {
    const el = document.getElementById('liveTicker');
    if (!el) return;

    const items = [
      { label: 'NIFTY 50',   key: 'nifty50',   valFn: d => d.price,       fmt: fmt2   },
      { label: 'SENSEX',     key: 'sensex',    valFn: d => d.price,       fmt: fmt2   },
      { label: 'NIFTY BANK', key: 'niftybank', valFn: d => d.price,       fmt: fmt2   },
      { label: 'USD/INR',    key: 'usdinr',    valFn: d => d.price,       fmt: fmt2   },
      { label: 'GOLD (10g)', key: 'gold',      valFn: d => d.priceInr10g, fmt: fmtInt },
    ];

    const all = [...items, ...items, ...items, ...items];
    el.innerHTML = all.map(({ label, key, valFn, fmt }) => {
      const item   = data[key];
      const val    = item ? valFn(item) : null;
      const chgPct = item?.chgPct;
      const dir    = (chgPct ?? 0) >= 0 ? 'up' : 'down';
      return `<div class="ticker-item"><span>${label}</span><strong>${fmt(val)}</strong><em class="${dir}">${fmtPct(chgPct)}</em></div>`;
    }).join('');
  }

  /* ── Status badge ─────────────────────────────────────────────────── */
  function setStatus(state) {
    const dot   = document.getElementById('miLiveDot');
    const label = document.getElementById('miLiveLabel');
    const wrap  = document.getElementById('miLiveStatus');
    if (!dot || !label || !wrap) return;

    const cfg = {
      live:   { bg: '#22c55e', anim: 'miPulse 1.5s infinite', text: 'LIVE',   col: '#16a34a', bdr: 'rgba(34,197,94,.3)',   bg2: 'rgba(34,197,94,.06)'  },
      closed: { bg: '#f59e0b', anim: 'none',                  text: 'CLOSED', col: '#b45309', bdr: 'rgba(245,158,11,.3)', bg2: 'rgba(245,158,11,.06)' },
      error:  { bg: '#ef4444', anim: 'none',                  text: 'ERROR',  col: '#b91c1c', bdr: '#fecaca',             bg2: '#fef2f2'               },
      idle:   { bg: '#ccc',    anim: 'none',                  text: '…',      col: '#888',    bdr: '#e5e5e5',             bg2: '#f8f8f8'               },
    }[state];
    if (!cfg) return;
    dot.style.cssText      = `width:6px;height:6px;border-radius:50%;background:${cfg.bg};animation:${cfg.anim};display:inline-block;`;
    label.textContent      = cfg.text;
    label.style.color      = cfg.col;
    wrap.style.borderColor = cfg.bdr;
    wrap.style.background  = cfg.bg2;
  }

  /* ── Inject CSS once ──────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('md-styles')) return;
    const s = document.createElement('style');
    s.id = 'md-styles';
    s.textContent = `
      @keyframes miPulse {
        0%   { box-shadow: 0 0 0 0   rgba(34,197,94,.65); }
        70%  { box-shadow: 0 0 0 7px rgba(34,197,94,0);   }
        100% { box-shadow: 0 0 0 0   rgba(34,197,94,0);   }
      }
      .mi-col-val { transition: opacity .25s ease; }
      #md-refresh-btn {
        margin-left: 6px; cursor: pointer;
        background: none; border: none;
        font-size: 16px; color: #bbb;
        transition: color .2s; vertical-align: middle;
        padding: 0; line-height: 1;
      }
      #md-refresh-btn:hover { color: var(--gold, #cda754); }
      #md-refresh-btn.spin  { animation: mdSpin .6s linear; }
      @keyframes mdSpin { to { transform: rotate(360deg); } }
      #md-timestamp {
        font-size: 10px; color: #bbb;
        display: block; margin-top: 5px; letter-spacing: .03em;
      }
    `;
    document.head.appendChild(s);
  }

  /* ── Refresh button + timestamp UI ───────────────────────────────── */
  function injectRefreshUI() {
    if (document.getElementById('md-refresh-btn')) return;
    const link = document.querySelector('.mi-link-right');
    if (!link) return;

    const btn = document.createElement('button');
    btn.id = 'md-refresh-btn';
    btn.title = 'Refresh market data';
    btn.innerHTML = '↻';
    btn.onclick = () => {
      btn.classList.add('spin');
      btn.disabled = true;
      refresh().finally(() => { btn.classList.remove('spin'); btn.disabled = false; });
    };

    const ts = document.createElement('span');
    ts.id = 'md-timestamp';
    link.insertAdjacentElement('afterend', btn);
    btn.insertAdjacentElement('afterend', ts);
  }

  function stampTime() {
    const el = document.getElementById('md-timestamp');
    if (el) el.textContent = `Updated ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} IST`;
  }

  /* ── Main refresh cycle ───────────────────────────────────────────── */
  async function refresh() {
    try {
      const data = await fetchMarketData();
      updateTicker(data);
      updateMICard(data);
      stampTime();
      setStatus(isMarketOpen() ? 'live' : 'closed');
      console.log('[market-data] ✓', new Date().toLocaleTimeString('en-IN'));
    } catch (err) {
      console.warn('[market-data] ✗ fetch failed — keeping existing values.', err.message);
      setStatus('error');
    }
  }

  /* ── Boot ─────────────────────────────────────────────────────────── */
  function boot() {
    injectStyles();
    const waitForRender = () => {
      if (!document.getElementById('liveTicker')) { requestAnimationFrame(waitForRender); return; }
      setStatus('idle');
      injectRefreshUI();
      setTimeout(() => { refresh(); setInterval(refresh, REFRESH_MS); }, 600);
    };
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(waitForRender))
      : requestAnimationFrame(waitForRender);
  }

  boot();
})();
