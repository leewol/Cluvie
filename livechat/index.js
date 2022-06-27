import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const fs = require("fs");
const app = express();
const server = createServer(app);
const io = new Server(server);
import dotenv from "dotenv";
import { disconnect } from "process";
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

io.sockets.on("connection", (socket) => {
  socket.on("new User", (name) => {
    console.log(name, "님이 접속하였습니다.");
    socket.name = name;
    io.sockets.emit("update", {
      type: "connect",
      name: "SERVER",
      message: name + "님이 접속하였습니다.",
    });
  });

  socket.on("message", (data) => {
    data.name = socket.name;
    console.log(data);
    socket.broadcast.emit("update", data);
  });

  socket.on("disconnect", () => {
    console.log(socket.name + "님이 나가셨습니다.");
    socket.broadcast.emit("update", {
      type: disconnect,
      name: "SERVER",
      message: socket.name + "님이 나가셨습니다.",
    });
  });
});

server.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
