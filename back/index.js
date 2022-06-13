import cors from "cors";
import express from "express";
import db from "./models/index";
import clubRouter from "./src/routes/club/router";
import registerRouter from "./src/routes/register/router";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 5001;

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors({ origin: true, credentials: true }));
// app.use(express.urlencoded({ extended: false })); // ? 알아내자
app.use(express.json()); //->req.body 가 잘 보내짐

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// app.use(userAuthRouter);
app.use(clubRouter);
app.use(registerRouter);

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
