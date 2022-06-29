import cors from "cors";
import express, { application } from "express";
import db from "./models/index";
import clubRouter from "./src/routes/club/router";
import userRouter from "./src/routes/user/router";
import likeRouter from "./src/routes/like/router";
import applicantRouter from "./src/routes/applicant/router";
import authRouter from "./src/routes/email/router";
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

app.use("/users", userRouter);
app.use("/likes", likeRouter);
app.use("/clubs", clubRouter);
app.use("/applications", applicantRouter);
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
