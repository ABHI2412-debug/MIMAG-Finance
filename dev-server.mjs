import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const argValue = (name) => { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : undefined; };
const port = Number(process.env.PORT || argValue("--port") || 5173);
const host = process.env.HOST || argValue("--host") || "0.0.0.0";
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

http.createServer((request, response) => {
    const pathname = new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname;
    const requested = pathname === "/" ? "index.html" : pathname.slice(1);
  const file = path.join(root, requested);
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "Content-Type": types[path.extname(file)] || "text/plain" });
  response.end(fs.readFileSync(file));
}).listen(port, host, () => console.log(`MIMAG Finance running at http://127.0.0.1:${port}`));
