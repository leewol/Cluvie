import { Router } from "express";
import { registerService } from "./service";

const registerRouter = Router();

registerRouter.post("/users", async (req, res) => {
  try {
    const { email, password, nickname, birthday, sex } = req.body;
    const user = await registerService.register({
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

export default registerRouter;
