var http = require('http'),
  url = require('url'),
  fs = require('fs'),
  os = require('os');
const { stringify } = require('querystring');

var extensions = {
  "html": "text/html",
  "txt": "text/plain",
  "css": "text/css",
  "gif": "image/gif",
  "ico": "image/x-icon",
  "jpg": "image/jpeg",
  "js": "application/javascript",
  "json": "application/json",
  "png": "image/png",
  "svg": "image/svg+xml",
  "ttf": "font/ttf",
  "wav": "audio/wav",
  "xml": "application/xml",
  "log": "text/x-log",
  "woff": "application/font-woff",
  "woff2": "application/font-woff"
}

http.createServer((req, res) => {
  var data = url.parse(req.url)
  if (req.method === "GET") {
    if (data.href === "/") data.href = "/index.html"
    data.href = "./game" + (data.href[0] === '/' ? '' : '/') + remove_parent(data.href)
    var i = data.href.split(".");
    console.log(data.href)
    fs.readFile(decodeURIComponent(data.href), (err, data) => {
      if (err) {
        res.end("fs error")
      } else {
        res.writeHead(200, {'Content-Type': extensions[i[i.length - 1]]})
        res.end(data)
      }
    })
  }
}).listen(80)

function remove_parent(str) {
  while (str !== str.replace('..', '.')) str = str.replace('..', '.')
  return str
}
