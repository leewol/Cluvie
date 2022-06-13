import { Router } from "express";
import { userService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(404).json({ success: false, err });
  }
});

// userRouter.put("/")
export default userRouter;
