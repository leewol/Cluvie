import express from "express";
import Users from "../../../models/user";
import { verifyToken } from "../../middlewares/verifyToken";

const livechatRouter = express.Router();

// 클럽 이름 GET API
// 채팅에 참여하고 있는 인원 수  GET API
// 채팅 사용자 닉네임 GEt API

livechatRouter.get("/livechat/:club_id", async (req, res) => {
  let club_id = req.params.club_id;
  res.json({ club_id: club_id });
});

module.exports = livechatRouter;
