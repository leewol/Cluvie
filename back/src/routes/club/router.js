import express from "express";
import Clubs from "../../../models/club";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import clubService from "./service";
// 조회수
const clubRouter = express.Router();

clubRouter.post("/", verifyToken, async (req, res) => {
  // let club = req.body;
  // console.log(club);
  // club.views = 0;
  // club.manager_id = req.user;
  // console.log(club.manager_id);
  await Clubs.create({
    name: req.body.name,
    manager_id: req.user,
    intro: req.body.intro,
    day: req.body.day,
    description: req.body.description,
    num: req.body.num,
    picture: req.body.picture,
    club_state: req.body.club_state,
    duration_of_progress: req.body.duration_of_progress,
    process: req.body.process,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    views: 0,
  })
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

clubRouter.get("/clubs", async (req, res) => {
  await Clubs.findAll({})
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
    });
});

clubRouter.get("/clubs/:id", async (req, res) => {
  await Clubs.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
    });
});
clubRouter.put("/clubs/:id", async (req, res) => {
  const club = await Clubs.findOne({ where: { id: req.params.id } });
  if (!club) {
    return res.status(404).json("존재하지 않는 클럽입니다.");
  }
  await Clubs.update(
    {
      name: req.body.name,
      intro: req.body.intro,
      day: req.body.day,
      description: req.body.description,
      num: req.body.num,
      process: req.body.process,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
    },
    { where: { id: req.params.id } }
  )
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
    });
});

// 없는 모임을 삭제할 경우, 에러 처리
clubRouter.delete("/clubs/:id", async (req, res, next) => {
  try {
    const clubId = req.params.id;
    const club = await Clubs.findOne({ where: { id: clubId } });
    if (!club) {
      return res
        .status(404)
        .json({ success: false, message: "존재하지 않는 모임입니다." });
    }
    Clubs.destroy({
      where: { id: clubId },
    });
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = clubRouter;
