import https from "node:https";
const url2 = "https://query2.finance.yahoo.com/v1/finance/search?q=ICICI%20Prudential%20Savings";
https.get(url2, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
    let d = "";
    res.on("data", c => d += c);
    res.on("end", () => {
        const json = JSON.parse(d);
        console.log("\nICICI Pru Savings matches:");
        json.quotes.forEach(q => console.log(q.symbol, q.shortname));
    });
});
