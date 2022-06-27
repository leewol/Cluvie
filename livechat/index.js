import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const app = express();
const server = createServer(app);
const socketio = new Server(server);
import dotenv from "dotenv";
dotenv.config();

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("hello world!");
});

server.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
