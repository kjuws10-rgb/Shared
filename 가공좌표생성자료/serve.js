#!/usr/bin/env node
"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const repositoryRoot = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://127.0.0.1:${port}`);
  const decodedPath = decodeURIComponent(url.pathname);
  const relativePath = decodedPath === "/" ? "가공좌표생성자료/실행프로그램.html" : decodedPath.slice(1);
  const absolutePath = path.resolve(repositoryRoot, relativePath);
  if (absolutePath !== repositoryRoot && !absolutePath.startsWith(`${repositoryRoot}${path.sep}`)) {
    return null;
  }
  return absolutePath;
}

const server = http.createServer((request, response) => {
  const absolutePath = resolveRequestPath(request.url || "/");
  if (!absolutePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.stat(absolutePath, (statError, stats) => {
    const filePath = !statError && stats.isDirectory()
      ? path.join(absolutePath, "index.html")
      : absolutePath;

    fs.readFile(filePath, (readError, data) => {
      if (readError) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }
      response.writeHead(200, {
        "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      response.end(data);
    });
  });
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`http://127.0.0.1:${port}/가공좌표생성자료/실행프로그램.html\n`);
});
