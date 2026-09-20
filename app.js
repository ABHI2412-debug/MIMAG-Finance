/* ═══════════════════════════════════════════════
   MIMAG Finance · FinVista layout merge
   Branch: fvista-layout
   ═══════════════════════════════════════════════ */

/* ── data ────────────────────────────────────── */
const services = [
  { icon: "📈", name: "Mutual Funds", desc: "Grow your wealth with expert guidance.", details: "Our Mutual Fund advisory helps you select the best equity, debt, and hybrid funds based on your risk profile and financial goals. We provide regular portfolio rebalancing and performance tracking to ensure you stay on the path to wealth creation." },
  { icon: "🛡️", name: "Term Insurance", desc: "Financial security for your loved ones.", details: "Protect your family's financial future with comprehensive term insurance plans. We help you calculate the optimal cover amount and choose policies with high claim settlement ratios at the most competitive premiums." },
  { icon: "❤️", name: "Health Insurance", desc: "Better health. Brighter tomorrow.", details: "Medical emergencies shouldn't drain your savings. We guide you through selecting robust health insurance plans that offer extensive coverage, cashless hospitalization, and no hidden sub-limits for complete peace of mind." },
  { icon: "💼", name: "PMS", desc: "Personalised wealth management.", details: "For high-net-worth individuals, our Portfolio Management Services offer customized investment strategies. Benefit from direct equity exposure, active fund management by seasoned experts, and exclusive investment opportunities." },
  { icon: "📊", name: "AIF", desc: "Access alternative investment opportunities.", details: "Diversify beyond traditional asset classes with Alternative Investment Funds. We provide access to private equity, real estate, hedge funds, and venture capital, designed for sophisticated investors seeking alpha." },
  { icon: "💰", name: "SIP", desc: "Small steps. Big wealth.", details: "Systematic Investment Plans (SIPs) are the most disciplined way to build wealth. By investing a fixed amount regularly, you benefit from rupee cost averaging and the incredible power of compounding over time." },
  { icon: "🏛️", name: "NPS", desc: "Plan for a peaceful retirement.", details: "The National Pension System (NPS) offers a highly tax-efficient way to build your retirement corpus. We help you choose the right pension fund manager and asset allocation to ensure a steady income in your golden years." },
  { icon: "📋", name: "Fixed Deposits", desc: "Stable returns. Lower risk.", details: "Preserve your capital and earn guaranteed returns with corporate and bank Fixed Deposits. We handpick high-rated FDs that offer better interest rates than traditional savings accounts while ensuring maximum safety." },
  { icon: "🔗", name: "Loan Against\nMutual Funds", desc: "Unlock the value of your investments.", details: "Need urgent liquidity? Don't sell your mutual funds. We help you secure an overdraft facility against your mutual fund holdings at attractive interest rates, so your investments continue to grow while you meet short-term cash needs." },
];

const partners = [
  { name: "UTI", color: "#d4380d", img: "https://logo.uplead.com/utimf.com" },
  { name: "HDFC", color: "#004b87", img: "https://logo.uplead.com/hdfcbank.com" },
  { name: "SBI", color: "#1a237e", img: "https://logo.uplead.com/sbi.co.in" },
  { name: "ICICI Prudential", color: "#f57f17", img: "https://logo.uplead.com/icicibank.com" },
  { name: "Kotak", color: "#e53935", img: "https://logo.uplead.com/kotak.com" },
  { name: "LIC", color: "#1b5e20", img: "https://logo.uplead.com/licindia.in" },
  { name: "Axis", color: "#880e4f", img: "https://logo.uplead.com/axisbank.com" },
];

const testimonials = [
  { name: "Rahul Mehta", role: "Software Engineer", stars: 5, text: "MIMAG helped me plan my investments with clarity. Their guidance on mutual funds and SIPs has truly made a difference in my financial journey.", img: "./assets/profile_rahul.png" },
  { name: "Priya Sharma", role: "Business Owner", stars: 5, text: "The term and health insurance advice is outstanding. I really feel financially secure for my family's future.", img: "./assets/profile_priya.png" },
  { name: "Amit Kulkarni", role: "Entrepreneur", stars: 5, text: "Professional, transparent, and always available. I highly recommend MIMAG for anyone serious about long-term financial planning.", img: "./assets/profile_amit.png" },
];

const insights = [
  { tag: "Equity", title: "The Power of SIPs in Building Long-Term Wealth", date: "Aug 26, 2024", image: "./assets/insights_blog_1.png" },
  { tag: "Insurance", title: "Why Term Insurance is a Must-Have in 2024", date: "Aug 20, 2024", image: "./assets/insights_blog_2.png" },
  { tag: "Funds", title: "NPS vs Mutual Funds: Which is Right for You?", date: "Aug 12, 2024", image: "./assets/finance-building.jpg" },
];

const funds = [
  { name: "MIMAG High-Growth Equity", category: "Equity - Large & Mid Cap", risk: "Very High", return5y: "18.4%", minSip: "₹ 1,000", nav: "124.55", tag: "Top Rated" },
  { name: "MIMAG Tax Saver 80C", category: "ELSS - Tax Saving", risk: "High", return5y: "15.2%", minSip: "₹ 500", nav: "86.12", tag: "Tax Saver" },
  { name: "MIMAG Stable Debt Fund", category: "Debt - Corporate Bond", risk: "Low to Moderate", return5y: "7.8%", minSip: "₹ 1,000", nav: "32.40", tag: "Low Risk" },
];

const faqs = [
  { q: "What is the minimum amount required to start a SIP?", a: "You can start a Systematic Investment Plan (SIP) with as little as ₹500 per month for most mutual funds." },
  { q: "How do I track my portfolio performance?", a: "MIMAG Finance provides a unified dashboard where you can track all your mutual funds, insurance, and other assets in real-time." },
  { q: "Is my money safe with MIMAG?", a: "We partner directly with SEBI-registered AMCs and IRDAI-approved insurers. Your investments are held securely with the respective institutions." },
  { q: "Can I withdraw my mutual fund investments anytime?", a: "Yes, open-ended mutual funds can be withdrawn at any time. However, ELSS (Tax Saver) funds have a mandatory 3-year lock-in period." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We understand your goals, risk appetite, and current financial standing." },
  { step: "02", title: "Strategy", desc: "Our experts design a custom portfolio tailored to achieve your specific targets." },
  { step: "03", title: "Execution", desc: "Seamless onboarding and investment execution via our digital platform." },
  { step: "04", title: "Review", desc: "Continuous monitoring and periodic rebalancing to keep you on track." },
];

const tickers = [
  { name: "NIFTY 50", val: "22,514.65", change: "+0.85%" },
  { name: "SENSEX", val: "74,228.02", change: "+0.78%" },
  { name: "GOLD (10g)", val: "71,450", change: "-0.12%" },
  { name: "USD/INR", val: "83.45", change: "-0.05%" },
  { name: "NIFTY BANK", val: "48,159.10", change: "+1.20%" },
];



/* ── math helpers ─────────────────────────────── */
const formatINR = v => `₹ ${Math.round(v).toLocaleString("en-IN")}`;
const sipFV = (m, r, y) => { const n = y * 12, mr = r / 12 / 100; return mr === 0 ? m * n : m * (((1 + mr) ** n - 1) / mr) * (1 + mr); };
const lsFV = (p, r, y) => p * ((1 + r / 100) ** y);

function animateValue(el, start, end, duration) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = formatINR(end);
    return;
  }
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * ease;
    el.textContent = formatINR(current);
    if (progress < 1) window.requestAnimationFrame(step);
    else el.textContent = formatINR(end);
  };
  window.requestAnimationFrame(step);
}

/* ── render ───────────────────────────────────── */
const render = () => {
  document.querySelector("#app").innerHTML = `
  <div id="scroll-progress"></div>

  <!-- ═══ TICKER ═══ -->
  <div class="ticker-wrap">
    <div class="ticker">
      ${[...tickers, ...tickers, ...tickers, ...tickers].map(t => `
      <div class="ticker-item">
        <span>${t.name}</span>
        <strong>${t.val}</strong>
        <em class="${t.change.startsWith('-') ? 'down' : 'up'}">${t.change}</em>
      </div>
      `).join("")}
    </div>
  </div>

  <!-- ═══ HEADER ═══ -->
  <header class="hdr">
    <div class="container hdr-inner">
      <a class="brand" href="#top">
        <img src="./assets/logo-finvista.png" alt="FinVista" style="height: 72px; width: auto;">
      </a>
      <div class="nav-wrap">
        <nav class="nav" id="mainNav">
          <div class="nav-highlight" id="navHighlight"></div>
          <a href="#top">About Us</a>
          <a href="#services">Our Services <span style="font-size:10px">▼</span></a>
          <a href="#calc">SIP Calculator</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Careers</a>
        </nav>
      </div>
      <div class="hdr-right">
        <a class="btn btn--gold" href="#contact">Book a Consultation ↗</a>
        <button class="hamburger" id="menuBtn" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>

  <main>

  <!-- ═══ HERO ═══ -->
  <section class="hero" id="top">
    <img src="./assets/hero-bg-custom.jpg" alt="Hero Background" class="hero-bg" id="heroBgImage" style="opacity: 1; z-index: 0; will-change: transform, opacity;">
    <div class="hero-glow" id="heroGlow"></div>
    <div class="bubble-deco bd-1"></div>
    <div class="bubble-deco bd-2"></div>
    <div class="bubble-deco bd-3"></div>
    <div class="hero-overlay"></div>

    <div class="container hero-body">
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow hero-reveal">MORE THAN INVESTMENTS</p>
        <h1 class="hero-reveal">A More Secure,<br><strong>Confident You.</strong></h1>
        <p class="hero-sub hero-reveal" style="max-width: 600px; line-height: 1.6; margin-bottom: 32px; font-size: 18px; color: rgba(255,255,255,0.7);">Comprehensive financial solutions — from mutual funds and insurance to PMS, AIF, SIP, NPS, FD and loans against mutual funds — designed around your life goals.</p>
        <div class="hero-btns hero-reveal">
          <a class="btn btn--gold" href="#services">Explore Our Services ↗</a>
          <a class="btn btn--outline-light" href="#calc">Calculate Your SIP →</a>
        </div>

        <div class="hero-strip hero-reveal" style="display:flex; align-items:center; flex-wrap:wrap; gap:32px; padding-top:24px; margin-top:40px; border-top:1px solid rgba(255,255,255,0.1);">
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Plan<br>Better</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Invest<br>Smarter</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px; padding-right:32px; border-right:1px solid rgba(255,255,255,0.1);">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Stay<br>Protected</span>
          </div>
          <div class="hstrip-item" style="display:flex; align-items:center; gap:12px;">
            <span class="hstrip-ico" style="display:flex; color:var(--gold);"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></span>
            <span style="font-size:13px; line-height:1.3; color:rgba(255,255,255,0.8); font-weight:500;">Achieve<br>More</span>
          </div>
        </div>

        <div class="hero-metrics hero-reveal" style="display:flex; flex-wrap:wrap; gap:48px; margin-top:48px; animation-delay:0.5s;">
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">₹500<span style="color:var(--gold)">+</span> Cr</div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Assets Under Management</div>
          </div>
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">10k<span style="color:var(--gold)">+</span></div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Happy Families</div>
          </div>
          <div>
            <div style="font-size:32px; font-weight:700; color:#fff; line-height:1;">15<span style="color:var(--gold)">+</span></div>
            <div style="font-size:12px; color:rgba(255,255,255,0.6); margin-top:8px; text-transform:uppercase; letter-spacing:0.05em;">Years of Excellence</div>
          </div>
        </div>
      </div>
      <div class="hero-float-text">
        <span>DISCIPLINE</span>
        <span>TODAY</span>
        <span>FREEDOM</span>
        <span>TOMORROW</span>
      </div>
    </div>

  </section>



  <!-- ═══ SERVICES ═══ -->
  <section class="sec sec--cream" id="services" style="position:relative; overflow:hidden;">
    <div class="float-text" style="top: 10%; left: 5%; font-size: 42px; --rot: -10deg; --dur: 7s;">Wealth Creation</div>
    <div class="float-text" style="top: 35%; right: 8%; font-size: 46px; --rot: 8deg; --dur: 8.5s;">Secure Future</div>
    <div class="float-text" style="top: 60%; left: -2%; font-size: 40px; --rot: -12deg; --dur: 6.5s;">Strategic Planning</div>
    <div class="float-text" style="bottom: 15%; right: 15%; font-size: 44px; --rot: 10deg; --dur: 9s;">Financial Freedom</div>
    <div class="float-text" style="bottom: 5%; left: 30%; font-size: 48px; --rot: -5deg; --dur: 7.5s;">Legacy Building</div>
    
    <div class="container" style="position:relative; z-index:1;">
      <div class="sec-head reveal">
        <div>
          <p class="eyebrow">OUR SERVICES</p>
          <h2>Complete Financial Solutions<br><strong>Under One Roof.</strong></h2>
          <p class="sec-sub">Whether you want to grow your wealth, protect what matters, or plan for the future — we offer a wide range of financial solutions tailored to your goals.</p>
        </div>
        <div style="text-align: right;">
          <a class="link-arrow" href="#contact" style="display:block; margin-bottom: 24px; position:relative; z-index:2;">Explore All Services</a>
          <div style="font-family: 'Great Vibes', 'Brush Script MT', cursive; font-size: 42px; color: var(--muted); transform: rotate(-8deg); opacity: 0.7; padding-right: 24px; margin-top: 16px; line-height: 1.1; display: inline-block;">Your Goals<br>Our Guidance</div>
        </div>
      </div>
      <div class="svc-grid">
        ${services.map((s, i) => `
        <div class="svc-card reveal reveal-delay-${(i % 5) + 1}" data-index="${i}" style="cursor:pointer;" onclick="openServiceModal(${i})">
          <span class="svc-ico">${s.icon}</span>
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div style="text-align: right; margin-top: auto; color: var(--gold); font-size: 16px;">→</div>
        </div>`).join("")}
        <div class="svc-card svc-card--cta reveal reveal-delay-5" style="cursor:pointer;" onclick="document.getElementById('contactModal').classList.add('active')">
          <p>Not sure<br>what's right for you?</p>
          <strong>Talk to our experts for personalised advice.</strong>
          <div style="margin-top:auto; width:36px; height:36px; border-radius:50%; background:var(--gold); display:grid; place-items:center; color:var(--black); font-size:16px;">→</div>
        </div>
      </div>
    </div>
  </section>



  <!-- ═══ FEATURED FUNDS ═══ -->
  <section class="sec sec--dark-bg" id="funds" style="background:#111; color:#fff;">
    <div class="container">
      <div class="sec-head reveal">
        <div>
          <p class="eyebrow eyebrow--gold">TOP PERFORMERS</p>
          <h2 style="color:#fff;">Featured Mutual<br><strong>Funds.</strong></h2>
          <p class="sec-sub">Handpicked by our experts for consistent performance and long-term growth potential.</p>
        </div>
        <a class="link-arrow" href="#contact" style="color:var(--gold);">View All Funds</a>
      </div>
      <div class="funds-grid">
        ${funds.map((f, i) => `
        <div class="fund-card reveal reveal-delay-${i + 1}">
          <span class="fund-tag">${f.tag}</span>
          <h3>${f.name}</h3>
          <p class="fund-cat">${f.category} • ${f.risk}</p>
          <div class="fund-stats">
            <div class="f-stat"><span>5Y Return</span><strong class="text-green">${f.return5y}</strong></div>
            <div class="f-stat"><span>Min SIP</span><strong>${f.minSip}</strong></div>
          </div>
          <div class="fund-chart"></div>
          <div class="fund-bot">
            <span>NAV: ${f.nav}</span>
            <span style="color:var(--gold); font-size:18px;">+</span>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ PARTNERS ═══ -->
  <section class="sec sec--partners" id="partners">
    <div class="container">
      <div class="sec-head reveal">
        <div>
          <p class="eyebrow">OUR TRUSTED PARTNERS</p>
          <h2>Direct Access to Leading<br><strong>Financial Institutions.</strong></h2>
          <p class="sec-sub">We work with India's most trusted asset management companies, insurance providers and financial institutions, giving you access to genuine products and the best opportunities.</p>
        </div>
        <a class="link-arrow" href="#contact">View All Partners</a>
      </div>
      <div class="partners-row" style="display: flex; gap: 24px; align-items: center; padding-left: 5%; flex-wrap: wrap;">
        ${partners.map(p => `
          <div class="partner-logo" style="--pc:${p.color}; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; padding: 12px; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; width: 140px; height: 70px;">
            <img src="${p.img}" alt="${p.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; filter: grayscale(100%) brightness(150%); opacity: 0.7; transition: all 0.3s;" onmouseover="this.style.filter='grayscale(0) brightness(100%)'; this.style.opacity='1'" onmouseout="this.style.filter='grayscale(100%) brightness(150%)'; this.style.opacity='0.7'">
          </div>
        `).join("")}
        <div class="partner-logo" style="flex-direction:column; gap:6px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; justify-content: center; align-items: center; width: 140px; height: 70px;">
          <div style="width:32px;height:32px;border-radius:50%;border:1px solid var(--gold);color:var(--gold);display:grid;place-items:center;">+</div>
          <span style="font-size:10px;color:rgba(255,255,255,0.6);font-weight:600;text-align:center;">and more</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CALCULATOR ═══ -->
  <section class="sec sec--cream" id="calc">
    <div class="container">
      <div class="calc-layout">
        <div class="calc-intro">
          <p class="eyebrow">OUR CALCULATOR</p>
          <h2>See the Power of<br><strong>Compounding.</strong></h2>
          <p class="sec-sub">Find out how your small, consistent investments can grow into something big over time.</p>
          <div class="calc-deco" style="margin-top: 40px; font-family: 'Great Vibes', 'Brush Script MT', cursive; font-size: 40px; color: var(--muted); transform: rotate(-8deg); opacity: 0.6; line-height: 1;">Small Steps<br>Big Possibilities</div>
        </div>
        
        <div class="calc-center">
          <div class="calc-panel reveal reveal-delay-1">
            <div class="calc-tabs">
              <button class="calc-tab active" data-mode="sip">SIP Calculator</button>
              <button class="calc-tab" data-mode="ls">Lumpsum Calculator</button>
            </div>
            <div class="calc-form" id="calcForm">
              <label class="calc-field">
                <span>Monthly Investment</span>
                <div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="5000" min="500" max="100000" step="500"></div>
              </label>
              <label class="calc-field">
                <span>Expected Return (p.a.)</span>
                <div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div>
              </label>
              <label class="calc-field">
                <span>Time Period</span>
                <div class="calc-input"><input type="number" id="cIn3" value="20" min="1" max="30" step="1"><span class="suf">Years</span></div>
              </label>
              <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>
            </div>
          </div>
          <div class="calc-results-row" id="calcResults">
            <div class="calc-res-item"><strong id="rInv">₹ 12,00,000</strong><span>Total Investment</span></div>
            <div class="calc-res-item"><strong id="rRet">₹ 34,71,332</strong><span>Estimated Returns</span></div>
            <div class="calc-res-item"><strong id="rTot">₹ 46,71,332</strong><span>Total Value</span></div>
          </div>
        </div>

        <div class="calc-right">
          <div class="calc-deco-right" style="margin-top: 40px; font-family: 'Great Vibes', 'Brush Script MT', cursive; font-size: 40px; color: var(--muted); transform: rotate(-8deg); opacity: 0.6; text-align: right; line-height: 1;">Invest<br>today<br>for a brighter<br>tomorrow</div>
          <!-- We don't have the plant image, so we just use the text layout as close as possible -->
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ PLATFORM MOCKUP ═══ -->
  <section class="sec platform-sec" style="background:var(--dark-bg);">
    <div class="container">
      <div class="platform-layout">
        <div class="plat-left reveal">
          <p class="eyebrow eyebrow--gold">OUR PLATFORM</p>
          <h2>Manage Everything<br><strong>In One Place.</strong></h2>
          <p>Experience seamless investing and portfolio tracking with our state-of-the-art digital platform, built for both beginners and experts.</p>
          <ul class="plat-features">
            <li><strong>Unified Dashboard</strong> - Track MFs, Insurance, FDs, and NPS together.</li>
            <li><strong>Bank-Grade Security</strong> - Your data is encrypted and secure.</li>
            <li><strong>Smart Analytics</strong> - Get insights on asset allocation and risks.</li>
            <li><strong>1-Click Execution</strong> - Fast, paperless, and hassle-free.</li>
          </ul>
        </div>
        <div class="plat-right reveal reveal-delay-2">
          <div class="mockup-frame">
            <div class="mockup-inner">
              <div class="mk-top">
                <span>Total Net Worth</span>
                <strong>₹ 46,71,332</strong>
                <small>+1.2% Today</small>
              </div>
              <div class="mk-chart"></div>
              <div class="mk-assets">
                <div class="mk-asset"><div class="mk-ic">📈</div><div>Equity<small>₹ 28L</small></div></div>
                <div class="mk-asset"><div class="mk-ic">🛡️</div><div>Debt<small>₹ 12L</small></div></div>
                <div class="mk-asset"><div class="mk-ic">🏦</div><div>Cash<small>₹ 6L</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ WHY CHOOSE US ═══ -->
  <section class="sec sec--dark-brown" id="why">
    <div class="container">
      <div class="why-layout">
        <div class="why-left reveal">
          <p class="eyebrow">WHY CHOOSE US</p>
          <h2>More Than Investments.<br><strong>A Partner for Life.</strong></h2>
        </div>
        <div class="why-right reveal reveal-delay-1" style="display:flex; justify-content:space-between; align-items:flex-end;">
          <p class="why-sub" style="margin:0;">We combine expertise, technology, and a client-first approach<br>to help you make smarter financial decisions.</p>
          <a class="link-arrow" href="#about" style="color:var(--gold);">Learn More</a>
        </div>
      </div>
      <div class="why-grid">
        <div class="why-item reveal reveal-delay-1"><span class="why-ico">👥</span><div><h3>Expert Guidance</h3><p>Backed by research<br>and experience</p></div></div>
        <div class="why-item reveal reveal-delay-2"><span class="why-ico">🛡️</span><div><h3>Transparent Process</h3><p>Clear, honest, and<br>in your best interest</p></div></div>
        <div class="why-item reveal reveal-delay-3"><span class="why-ico">⚙️</span><div><h3>Personalized Solutions</h3><p>Tailored to your<br>unique goals</p></div></div>
        <div class="why-item reveal reveal-delay-4"><span class="why-item-ico" style="font-size: 32px; color: var(--gold);">📈</span><div><h3>Long-Term Focus</h3><p>Because your<br>tomorrow matters</p></div></div>
      </div>
    </div>
  </section>

  <!-- ═══ PROCESS TIMELINE ═══ -->
  <section class="sec sec--cream" id="process">
    <div class="container">
      <div class="sec-head reveal">
        <div style="margin: 0 auto; text-align: center;">
          <p class="eyebrow">HOW IT WORKS</p>
          <h2>Your Journey to<br><strong>Financial Freedom.</strong></h2>
        </div>
      </div>
      <div class="process-grid">
        ${processSteps.map((p, i) => `
        <div class="process-step reveal reveal-delay-${i + 1}">
          <div class="step-num">${p.step}</div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ TESTIMONIALS ═══ -->
  <section class="sec sec--cream" id="testimonials">
    <div class="container">
      <div class="testi-header reveal">
        <div>
          <p class="eyebrow">TESTIMONIALS</p>
          <h2>What Our Clients Say.</h2>
        </div>
        <div style="display:flex; gap:12px;">
          <button style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border);background:var(--white);color:var(--muted);font-size:18px;display:grid;place-items:center;cursor:pointer;">←</button>
          <button style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border);background:var(--white);color:var(--muted);font-size:18px;display:grid;place-items:center;cursor:pointer;">→</button>
        </div>
      </div>
      <div class="testi-masonry">
        ${testimonials.map((t, i) => `
        <div class="testi-card reveal reveal-delay-${i + 1}">
          <div style="color:var(--gold); font-size:32px; font-family:Georgia,serif; line-height:1; margin-bottom:12px;">“</div>
          <p style="margin-bottom:24px;">${t.text}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="author">
              <img src="${t.img}" alt="${t.name}">
              <div><strong>${t.name}</strong><span>${t.role}</span></div>
            </div>
            <div class="stars" style="margin:0; font-size:12px; color:var(--gold);">★★★★★</div>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ FAQ ACCORDION ═══ -->
  <section class="sec sec--white" id="faq">
    <div class="container">
      <div class="sec-head reveal" style="text-align: center; justify-content: center;">
        <div>
          <p class="eyebrow">GOT QUESTIONS?</p>
          <h2>Frequently Asked<br><strong>Questions.</strong></h2>
        </div>
      </div>
      <div class="faq-list">
        ${faqs.map((f, i) => `
        <div class="faq-item reveal reveal-delay-${(i % 4) + 1}">
          <button class="faq-btn">${f.q} <i class="faq-icon">+</i></button>
          <div class="faq-content">
            <p>${f.a}</p>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- ═══ INSIGHTS ═══ -->
  <section class="sec sec--cream" id="insights">
    <div class="container">
      <div class="sec-head reveal">
        <div>
          <p class="eyebrow">INSIGHTS &amp; RESEARCH</p>
          <h2>Knowledge for a<br><strong>Brighter Tomorrow.</strong></h2>
          <p class="sec-sub">Stay informed with the latest insights, the best updates and financial planning tips.</p>
        </div>
        <a class="link-arrow" href="#insights">View All Insights</a>
      </div>
      <div class="ins-grid">
        ${insights.map((n, i) => `
        <div class="ins-card reveal reveal-delay-${(i % 3) + 1}">
          <div class="ins-img" style="background-image:url('${n.image}')">
            <span class="ins-tag">${n.tag}</span>
          </div>
          <div class="ins-body" style="display:flex; flex-direction:column; min-height: 140px;">
            <h3 style="margin-bottom:24px;">${n.title}</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
              <span class="ins-date">${n.date}</span>
              <span style="color:var(--gold); font-size:16px;">→</span>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>



  <!-- ═══ CTA ═══ -->
  <section class="sec sec--cta" id="contact">
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:40px;">
        <div class="cta-left reveal">
          <p class="eyebrow eyebrow--gold">READY TO TAKE THE NEXT STEP?</p>
          <h2 style="color:#fff;">Let's Build Your<br><strong>Brighter Tomorrow.</strong></h2>
        </div>
        <div class="cta-center reveal reveal-delay-1" style="max-width:320px;">
          <p class="sec-sub" style="margin:0 0 24px 0; color: rgba(255,255,255,0.95);">Connect with our financial experts and get a personalised plan for your goals.</p>
          <a class="btn btn--gold" href="#contact">Book a Free Consultation ↗</a>
        </div>
        <div class="cta-right-float reveal reveal-delay-2" style="text-align:right; font-size:10px; font-weight:700; letter-spacing:0.3em; color:rgba(255,255,255,0.85); line-height:2.4;">
          SAME.<br>GOALS.<br>A BRIGHTER.<br>TOMORROW.
        </div>
      </div>
    </div>
  </section>

  </main>

  <!-- ═══ FOOTER ═══ -->
  <footer class="ftr">
    <div class="container ftr-top">
      <div class="ftr-brand">
        <a class="brand" href="#top"><img src="./assets/logo-finvista.png" alt="FinVista" style="height: 72px; width: auto;"></a>
        <p>Plan Today. Wealth Tomorrow.</p>
        <div class="ftr-socials">
          <a href="#">in</a><a href="#">▶</a><a href="#">𝕏</a><a href="#">◎</a>
        </div>
      </div>
      <div class="ftr-cols">
        <div class="ftr-col"><span>Quick Links</span><a href="#top">Home</a><a href="#top">About Us</a><a href="#services">Our Services</a><a href="#calc">SIP Calculator</a></div>
        <div class="ftr-col"><span>Our Services</span><a href="#services">Mutual Funds</a><a href="#services">Insurance</a><a href="#services">PMS &amp; AIF</a><a href="#services">NPS &amp; FD</a><a href="#services">Loan Against MF</a></div>
        <div class="ftr-col">
          <h3>Newsletter</h3>
          <p style="color:#888; font-size:13px; line-height:1.5; margin-bottom:16px;">Get the latest updates and insights.</p>
          <form class="nl-form" id="nlForm" style="display:flex; gap:8px;">
            <input type="email" placeholder="Enter your email" required style="flex:1; padding:0 16px; border-radius:4px; border:1px solid #333; background:transparent; color:#fff; height:48px;">
            <button type="submit" style="width:48px;height:48px;background:var(--gold);border:none;border-radius:4px;color:var(--black);font-size:16px;cursor:pointer;">↗</button>
          </form>
        </div>
        
        <div class="ftr-col" style="text-align:right; font-size:11px; letter-spacing:0.3em; line-height:2.4; font-weight:700; color:#888; padding-top:16px;">
          INVEST<br>PROTECT<br>GROW<br>BELONG
        </div>
      </div>
    </div>
    <div class="container ftr-bottom">
      <span>© 2024 MIMAG Finance. All rights reserved.</span>
      <div class="ftr-legal"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Sitemap</a></div>
    </div>
  </footer>

  <button class="fab" id="fabBtn"><span>◎</span> Talk to a Money Guide <b>↗</b></button>  <!-- Service Info Modal -->
  <div class="modal-overlay" id="serviceModal" onclick="if(event.target===this) this.classList.remove('active')">
    <div class="modal-content" style="text-align: center; max-width: 500px;">
      <button class="modal-close" onclick="document.getElementById('serviceModal').classList.remove('active')">✕</button>
      <div id="smIcon" style="font-size: 48px; margin-bottom: 24px;"></div>
      <h3 id="smTitle" style="color: #fff; font-size: 28px; margin-bottom: 12px;"></h3>
      <p id="smDesc" style="color: var(--gold); font-size: 16px; font-weight: 700; margin-bottom: 24px;"></p>
      <div id="smDetails" style="color: var(--muted); line-height: 1.6; font-size: 15px;"></div>
    </div>
  </div>

  <div class="modal-overlay" id="contactModal">
    <div class="modal-content">
      <button class="modal-close" id="modalClose">✕</button>
      <h3>Talk to a Money Guide</h3>
      <p>Leave your details below and our expert will get in touch with you shortly.</p>
      <form class="contact-form" id="moneyGuideForm">
        <label>
          <span>Name</span>
          <input type="text" id="mgName" required placeholder="John Doe">
        </label>
        <label>
          <span>Email</span>
          <input type="email" id="mgEmail" required placeholder="john@example.com">
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" id="mgPhone" required placeholder="+91 98765 43210">
        </label>
        <button type="submit" class="btn btn--gold btn--block" style="margin-top: 16px;">Request Callback</button>
      </form>
    </div>
  </div>

  <div class="toast" id="toast"></div>
  `;
};

/* ── calculator logic ────────────────────────── */
let calcMode = "sip";

function runCalc() {
  const v1 = Math.max(1, Number(document.querySelector("#cIn1").value) || 0);
  const v2 = Math.max(1, Number(document.querySelector("#cIn2").value) || 0);
  const v3 = Math.max(1, Number(document.querySelector("#cIn3").value) || 0);

  let invested, total;
  if (calcMode === "sip") {
    invested = v1 * v3 * 12;
    total = sipFV(v1, v2, v3);
  } else {
    invested = v1;
    total = lsFV(v1, v2, v3);
  }
  const returns = total - invested;

  const elInv = document.querySelector("#rInv");
  const elRet = document.querySelector("#rRet");
  const elTot = document.querySelector("#rTot");

  const pInv = elInv.dataset.val ? parseFloat(elInv.dataset.val) : null;

  if (pInv === null) {
    elInv.textContent = formatINR(invested);
    elRet.textContent = formatINR(returns);
    elTot.textContent = formatINR(total);
  } else {
    animateValue(elInv, pInv, invested, 500);
    animateValue(elRet, parseFloat(elRet.dataset.val), returns, 500);
    animateValue(elTot, parseFloat(elTot.dataset.val), total, 500);

    // Highlight flash
    [elInv, elRet, elTot].forEach(el => {
      el.classList.remove('highlight-flash');
      void el.offsetWidth;
      el.classList.add('highlight-flash');
    });
  }

  elInv.dataset.val = invested;
  elRet.dataset.val = returns;
  elTot.dataset.val = total;
}

function switchCalcMode(mode) {
  calcMode = mode;
  document.querySelectorAll(".calc-tab").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  const form = document.querySelector("#calcForm");
  if (mode === "sip") {
    form.innerHTML = `
      <label class="calc-field"><span>Monthly Investment</span><div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="5000" min="500" max="100000" step="500"></div></label>
      <label class="calc-field"><span>Expected Return</span><div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div></label>
      <label class="calc-field"><span>Time Period</span><div class="calc-input"><input type="number" id="cIn3" value="20" min="1" max="30" step="1"><span class="suf">Years</span></div></label>
      <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>`;
  } else {
    form.innerHTML = `
      <label class="calc-field"><span>Investment Amount</span><div class="calc-input"><span class="pre">₹</span><input type="number" id="cIn1" value="500000" min="5000" max="10000000" step="5000"></div></label>
      <label class="calc-field"><span>Expected Return</span><div class="calc-input"><input type="number" id="cIn2" value="12" min="1" max="30" step="0.5"><span class="suf">%</span></div></label>
      <label class="calc-field"><span>Time Period</span><div class="calc-input"><input type="number" id="cIn3" value="10" min="1" max="30" step="1"><span class="suf">Years</span></div></label>
      <button class="btn btn--gold btn--block" id="calcBtn" type="button">Calculate Now →</button>`;
  }
  document.querySelector("#calcBtn").addEventListener("click", runCalc);
  document.querySelectorAll("#calcForm input").forEach(i => i.addEventListener("input", runCalc));
  runCalc();
}

/* ── toast ────────────────────────────────────── */
function toast(msg) {
  const el = document.querySelector("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3200);
}

/* ── boot ─────────────────────────────────────── */
render();

// Calculator
document.querySelector("#calcBtn").addEventListener("click", runCalc);
document.querySelectorAll("#calcForm input").forEach(i => i.addEventListener("input", runCalc));
document.querySelectorAll(".calc-tab").forEach(b => b.addEventListener("click", () => switchCalcMode(b.dataset.mode)));
runCalc();

// Globe — delay init to ensure layout is settled
requestAnimationFrame(() => {
  setTimeout(() => {
    const el = document.querySelector("#globe-scene");
    if (!el) return;
    import("./globe.js?v=7")
      .then(({ initGlobe }) => { if (el) initGlobe(el); })
      .catch(err => console.warn("Globe:", err));
  }, 120);
});

// Mobile nav
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

// Newsletter
document.querySelector("#nlForm").addEventListener("submit", e => {
  e.preventDefault(); e.currentTarget.reset();
  toast("Thanks! You're subscribed to MIMAG Finance insights.");
});

// Modal Logic
const modal = document.getElementById("contactModal");
const modalClose = document.getElementById("modalClose");
const mgForm = document.getElementById("moneyGuideForm");
const contactTriggers = document.querySelectorAll('a[href="#contact"], #fabBtn');

if (modal) {
  contactTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });
  });
  modalClose.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
  mgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
    toast("Request sent successfully! Our guide will contact you soon.");
    mgForm.reset();
  });
}

// Service Modal Logic
window.openServiceModal = function (index) {
  const service = services[index];
  if (!service) return;
  document.getElementById('smIcon').textContent = service.icon;
  document.getElementById('smTitle').textContent = service.name;
  document.getElementById('smDesc').textContent = service.desc;
  document.getElementById('smDetails').textContent = service.details;
  document.getElementById('serviceModal').classList.add('active');
};

// Scroll Animations
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Parallax & Scroll Progress
const progEl = document.getElementById('scroll-progress');
const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!isReduced) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (progEl) progEl.style.width = (scrolled / maxScroll * 100) + '%';
        ticking = false;
      });
      ticking = true;
    }
  });
}

// FAQ Accordion
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const active = document.querySelector(".faq-item.active");
    if (active && active !== item) active.classList.remove("active");
    item.classList.toggle("active");
  });
});

// Phase 4: Advanced Interaction JS
if (!isReduced && window.matchMedia("(hover: hover)").matches) {
  // Nav Highlight
  const nav = document.getElementById("mainNav");
  const highlight = document.getElementById("navHighlight");
  const links = nav.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
      highlight.style.opacity = "1";
      highlight.style.width = e.target.offsetWidth + "px";
      highlight.style.transform = `translateX(${e.target.offsetLeft}px)`;
    });
  });
  nav.addEventListener("mouseleave", () => {
    highlight.style.opacity = "0";
  });

  // Hero Glow
  const hero = document.getElementById("top");
  const glow = document.getElementById("heroGlow");
  if (hero && glow) {
    let heroRect;
    hero.addEventListener("mouseenter", () => {
      heroRect = hero.getBoundingClientRect();
    });
    hero.addEventListener("mousemove", (e) => {
      if (!heroRect) heroRect = hero.getBoundingClientRect();
      const x = e.clientX - heroRect.left;
      const y = e.clientY - heroRect.top;
      glow.style.setProperty('--x', x + "px");
      glow.style.setProperty('--y', y + "px");
    });
    window.addEventListener("resize", () => { heroRect = null; });
  }

  // Magnetic Buttons
  document.querySelectorAll('.btn:not(.no-magnet)').forEach(btn => {
    let btnRect;
    btn.addEventListener('mouseenter', () => {
      btnRect = btn.getBoundingClientRect();
    });
    btn.addEventListener('mousemove', (e) => {
      if (!btnRect) btnRect = btn.getBoundingClientRect();
      const x = e.clientX - btnRect.left - btnRect.width / 2;
      const y = e.clientY - btnRect.top - btnRect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btnRect = null;
    });
    window.addEventListener("resize", () => { btnRect = null; });
  });

  // Header compact on scroll
  const hdr = document.querySelector(".hdr");
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      hdr.classList.add("scrolled");
    } else {
      hdr.classList.remove("scrolled");
    }
  });
}

