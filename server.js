const http = require("http");
const fs = require("fs");
const path = require('path')
const { WebSocketServer, WebSocket } = require("ws");

const server = http.createServer((req, res)=>{
  let filePath = __dirname + (req.url == '/'?'index.html':req.url);
  let extname = path.extname(filePath)
  let contentType = "text/html";

  if 
})