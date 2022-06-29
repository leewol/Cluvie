import { Router } from "express";
import { authService } from "./service";

const authRouter = Router();

authRouter.post("/mail", async (req, res) => {
  try {
    const email = req.body.email;
    const authenticationNum = Math.floor(Math.random() * 1000000) + 100000;
    if (authenticationNum > 1000000) {
      authenticationNum = authenticationNum - 100000;
    }
    console.log(authenticationNum);
    await authService.sendEmail({ email, authenticationNum });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

export default authRouter;
