import http from "node:http";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const argValue = (name) => { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : undefined; };
const port = Number(process.env.PORT || argValue("--port") || 5173);
const host = process.env.HOST || argValue("--host") || "0.0.0.0";
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp" };

/* ── Market data proxy ───────────────────────────────────────────────
   GET /api/market  →  fetches each symbol via Yahoo Finance v8/chart
   server-side (no CORS issues), bundles them into one JSON response.
   ─────────────────────────────────────────────────────────────────── */
const YF_SYMBOLS = [
  { key: "nifty50",   symbol: "%5ENSEI"   },
  { key: "sensex",    symbol: "%5EBSESN"  },
  { key: "niftybank", symbol: "%5ENSEBANK" },
  { key: "usdinr",    symbol: "USDINR%3DX" },
  { key: "gold",      symbol: "GC%3DF"    },
];

const YF_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
  "Accept": "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://finance.yahoo.com/",
};

function fetchSymbol(sym) {
  return new Promise((resolve) => {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${sym.symbol}?interval=1d&range=5d`;
    const req = https.get(url, { headers: YF_HEADERS, timeout: 8000 }, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          const meta = json?.chart?.result?.[0]?.meta;
          if (!meta) return resolve(null);
          const prev  = meta.chartPreviousClose || meta.previousClose;
          const price = meta.regularMarketPrice;
          const chgPct = prev ? ((price - prev) / prev) * 100 : null;
          resolve({ key: sym.key, price, chgPct });
        } catch { resolve(null); }
      });
    });
    req.on("error", () => resolve(null));
    req.on("timeout", () => { req.destroy(); resolve(null); });
  });
}

async function fetchAllMarket(res) {
  try {
    const results = await Promise.all(YF_SYMBOLS.map(fetchSymbol));
    const payload = {};
    for (const r of results) if (r) payload[r.key] = { price: r.price, chgPct: r.chgPct };

    // Derive gold price in INR per 10g
    const usdInr = payload.usdinr?.price ?? 83.5;
    if (payload.gold?.price) {
      payload.gold.priceInr10g = payload.gold.price * usdInr * (10 / 31.1035);
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache, no-store",
    });
    res.end(JSON.stringify(payload));
  } catch (err) {
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: err.message }));
  }
}

http.createServer((request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname;

  if (pathname === "/api/market") {
    fetchAllMarket(response);
    return;
  }

  const requested = pathname === "/" ? "index.html" : pathname.slice(1);
  const dependencyFallbacks = {
    "three.module.js": path.join(root, "node_modules/three/build/three.module.js"),
    "three.core.js":   path.join(root, "node_modules/three/build/three.core.js"),
  };
  const file = dependencyFallbacks[requested] || path.join(root, requested);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": types[path.extname(file)] || "text/plain",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
  });
  response.end(fs.readFileSync(file));
}).listen(port, host, () => console.log(`MIMAG Finance running at http://127.0.0.1:${port}`));
