import express from "express";
import Applicants from "../../../models/applicant";
import { verifyToken } from "../../middlewares/verifyToken";

const applicantRouter = express.Router();

applicantRouter.get("/:id", async (req, res, next) => {
  try {
    const applicants = await Applicants.findAll({ user_id });
  } catch {}
});
