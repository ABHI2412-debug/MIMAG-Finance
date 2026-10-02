import https from "node:https";

const YF_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Accept": "application/json",
};

const symbols = ['0P00005WZY.BO', '0P0000XW8F.BO', '0P00005V15.BO', '0P00005WOZ.BO'];

symbols.forEach(sym => {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=1d`;
    https.get(url, { headers: YF_HEADERS, timeout: 8000 }, (resProxy) => {
        let data = "";
        resProxy.on("data", c => data += c);
        resProxy.on("end", () => {
            console.log(`\n--- ${sym} ---`);
            try {
                const json = JSON.parse(data);
                const meta = json?.chart?.result?.[0]?.meta;
                if (meta) {
                    console.log("Price:", meta.regularMarketPrice);
                    console.log("Change %:", meta.regularMarketChangePercent);
                    console.log("Previous Close:", meta.previousClose || meta.chartPreviousClose);
                } else {
                    console.log("No meta found. Response:", data.substring(0, 200));
                }
            } catch(e) { console.log(e) }
        });
    });
});
