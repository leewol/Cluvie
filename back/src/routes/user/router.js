import express from "express";
import { userService } from "./service";

const userRouter = express.Router();

userRouter.post("/login", userService.createToken);

export { userRouter };
