import { Router } from "express";
import { userService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const userRouter = Router();

// 공통 url: "/users"

// 회원가입
userRouter.post("/", async (req, res) => {
  try {
    const { email, password, nickname, birthday, sex } = req.body;
    const user = await userService.register({
      email,
      password,
      nickname,
      birthday,
      sex,
    });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
});

// 로그인
userRouter.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });

    if (token.errorMessage) {
      throw new Error(token.errorMessage);
    }
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(404).json({ success: false, err: err.message });
    console.log(err);
  }
});

// 사용자 정보 GET
userRouter.get("/", verifyToken, async (req, res) => {
  try {
    const id = req.user;
    const user = await userService.getUserData({ id });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(404).json({ success: false, err });
    console.log(err);
  }
});

// 회원정보 수정(nickname, description)
userRouter.patch("/", verifyToken, async (req, res) => {
  try {
    const { nickname, description } = req.body;
    const id = req.user;
    const userUpdated = await userService.userDataUpdate({
      id,
      nickname,
      description,
    });
    if (userUpdated.errorMessage) {
      throw new Error(userUpdated.errorMessage);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, err });
    console.log(err);
  }
});

export default userRouter;
