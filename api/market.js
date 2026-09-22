import https from "node:https";

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

export default async function handler(req, res) {
  try {
    const results = await Promise.all(YF_SYMBOLS.map(fetchSymbol));
    const payload = {};
    for (const r of results) if (r) payload[r.key] = { price: r.price, chgPct: r.chgPct };

    // Derive gold price in INR per 10g
    const usdInr = payload.usdinr?.price ?? 83.5;
    if (payload.gold?.price) {
      payload.gold.priceInr10g = payload.gold.price * usdInr * (10 / 31.1035);
    }

    res.status(200).json(payload);
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
}
