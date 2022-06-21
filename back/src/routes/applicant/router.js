import express from "express";
import { verifyToken } from "../../middlewares/verifyToken";
import { applicantService } from "./service";

const applicantRouter = express.Router();

// 공통 url: "/applicants" 

applicantRouter.post("/:club_id", verifyToken, async (req, res) => {
  try {
    const user_id = req.user
    const club_id = req.params.club_id

    const applicated = await applicantService.application({user_id, club_id})

    if (applicated.errorMessager) {
      throw new Error(applicated.errorMessager)
      
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({success: false, err})
  }
});

applicantRouter.delete("/:club_id", verifyToken, async (req, res) => {
  try {
    const user_id = req.user
    const club_id = req.params.club_id

    const canceled = await applicantService.cancelApplication({user_id, club_id})

    if (canceled.errorMessager) {
      throw new Error(canceled.errorMessager)
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({success: false, err})
  }
});

module.exports = applicantRouter;
