import { Router } from "express";
import { userService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const userRouter = Router();

userRouter.post("/signIn", async (req, res) => {
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

userRouter.patch("/users/description", verifyToken, async (req, res) => {
  try {
    const { description } = req.body;
    const id = req.user;
    const updatedDescription = await userService.updateDescription({
      id,
      description,
    });
    if (updatedDescription.errorMessage) {
      throw new Error(updatedDescription.errorMessage);
    }
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, err });
    console.log(err);
  }
});
export default userRouter;
