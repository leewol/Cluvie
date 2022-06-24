const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
import dotenv from "dotenv";
dotenv.config();

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("hello world!");
});

server.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
