import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
// const dotenv = require("dotenv").config();
import passport from "passport";
import passportConfig from "./passport/index";
import session from "express-session";
import cookieParser from "cookie-parser";
import db from "./models/index";
// import userAuthRouter from "./src/routers/userRouter";
import clubRouter from "./src/routes/club/router";
dotenv.config();
passportConfig();
const app = express();

const PORT = 5001;

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.DB_PASSWORD,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// app.use(userAuthRouter);
app.use(clubRouter);
app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
