import express from "express";
import db from "./models/index";
import { Server } from "socket.io";
import { createServer } from "http";
import livechatRouter from "./src/routes/livechat/router";
const fs = require("fs");
const app = express();
const server = createServer(app);
const io = new Server(server);
import dotenv from "dotenv";
dotenv.config();

const PORT = 5001;

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/css", express.static("./static/css"));
app.use("/js", express.static("./static/js"));
app.use(livechatRouter);

app.get("/:club_id", (req, res) => {
  // fs.readFile("./static/js/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.send("에러");
  //   } else {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write(data);
  //     res.end();
  //   }
  // });
  console.log("채팅방 이름 : " + req.params.club_id);
  res.render("index", { room: req.params.room });
});

// let numUsers = 0;

// io.sockets.on("connection", (socket) => {
//   let addedUser = false;
//   socket.on("newMessage", (data) => {
//     console.log(`${socket.username} : ${data}`);
//     socket.broadcast.emit("newMessage", {
//       username: socket.username,
//       message: data,
//     });
//   });

//   socket.on("addUser", (username) => {
//     if (addedUser) return;

//     socket.username = username;
//     ++numUsers;
//     console.log("connected : " + socket.id + "num : " + numUsers);
//     addedUser = true;
//     socket.emit("login", {
//       numUsers: numUsers,
//     });
//     socket.broadcast.emit("userJoined", {
//       username: socket.username,
//       numUsers: numUsers,
//     });
//   });

//   socket.on("typing", () => {
//     socket.broadcast.emit("typing", {
//       usernames: socket.username,
//     });
//   });

//   socket.on("disconnect", () => {
//     if (addedUser) {
//       --numUsers;
//       console.log("disconnected" + socket.id + "num : " + numUsers);
//       socket.broadcast.emit("userLeft", {
//         username: socket.username,
//         numUsers: numUsers,
//       });
//     }
//   });
// });

io.sockets.on("connection", (socket) => {
  var roomName = null;
  socket.on("join", (data) => {
    roomName = data;
    socket.join(data);
  });

  socket.on("message", (data) => {
    socket.in(roomName).emit("message", data);
    console.log(data);
  });
});

server.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
