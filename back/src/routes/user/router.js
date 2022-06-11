import express from "express";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();
