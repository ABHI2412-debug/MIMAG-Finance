import https from "node:https";

const YF_HEADERS = {
  "User-Agent": "Mozilla/5.0",
  "Accept": "application/json",
};

const symbols = ['NIFTYIETF.BO'];

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
                } else {
                    console.log("No meta found");
                }
            } catch(e) { console.log(e) }
        });
    });
});
