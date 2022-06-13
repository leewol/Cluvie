import express from "express";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerRouter = express.Router();

// 회원가입
registerRouter.post("/users", async (req, res) => {
  try {
    const { email, password, nickname, age, sex } = req.body;

    const duplicate = await User.findOne({
      where: { email },
    });
    if (duplicate) {
      return res.status(403).send("중복된 이메일 입니다.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      nickname,
      age,
      sex,
    });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

export default registerRouter;
