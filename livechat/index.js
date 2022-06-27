import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const fs = require("fs");
const app = express();
const server = createServer(app);
const socketio = new Server(server);
import dotenv from "dotenv";
dotenv.config();

const PORT = 5001;

app.use("/css", express.static("./static/css"));
app.use("/js", express.static("./static/js"));

app.get("/", (req, res) => {
  fs.readFile("./static/js/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.send("에러");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
