import express from "express";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userAuthRouter = express.Router();

// 회원가입
userAuthRouter.post("/users", async (req, res) => {
  // const duplicate = await User.findOne({
  //   where: { email: req.body.email },
  // });
  // if (duplicate) {
  //   return res.status(403).send("중복된 이메일 입니다.");
  // }
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  const user = {
    email: req.body.email,
    password: hashedPassword,
    nickname: req.body.nickname,
    age: req.body.age,
    sex: req.body.sex,
  };

  await User.create(user)
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.json({ success: false });
      console.log(err);
    });
});

export default userAuthRouter;
