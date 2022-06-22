import express from "express";
import Clubs from "../../../models/club";
import { clubService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const clubRouter = express.Router();

// 공통 url: "/clubs"

clubRouter.post("/", verifyToken, async (req, res) => {
  let {
    name,
    intro,
    online,
    offline,
    description,
    head_count,
    picture,
    weekday,
    weekend,
    duration,
    state,
    hashtags,
  } = req.body;
  await Clubs.create({
    name,
    intro,
    online,
    offline,
    description,
    head_count,
    picture,
    weekday,
    weekend,
    duration,
    state,
    hashtags,
    views: 0,
    manager: req.user,
  })
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

clubRouter.get("/", async (req, res) => {
  const club = await Clubs.findAll({});
  const scrollClubList = await clubService
    .getClublist()
    .then((result) => {
      console.log(scrollClubList);
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
      console.log(err);
    });
});

clubRouter.get("/:id", async (req, res, next) => {
  try {
    const club = await Clubs.findOne({ where: { id: req.params.id } });
    if (!club) {
      return res
        .status(404)
        .json({ success: false, message: "존재하지 않는 모임입니다." });
    }
    await club.increment({ views: 1 }, { where: { id: req.params.id } });

    res.status(200).json({ success: true, club });
  } catch (err) {
    next(err);
  }
});

clubRouter.put("/:id", verifyToken, async (req, res) => {
  const club = await Clubs.findOne({ where: { id: req.params.id } });
  if (!club) {
    return res.status(404).json("존재하지 않는 모임입니다.");
  }
  let {
    name,
    intro,
    online,
    offline,
    description,
    head_count,
    picture,
    weekday,
    weekend,
    duration,
    state,
    hashtags,
  } = req.body;
  await Clubs.update(
    {
      name,
      intro,
      online,
      offline,
      description,
      head_count,
      picture,
      weekday,
      weekend,
      duration,
      state,
      hashtags,
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
clubRouter.delete("/:id", verifyToken, async (req, res, next) => {
  try {
    const club = await Clubs.findOne({ where: { id: req.params.id } });
    if (!club) {
      return res
        .status(404)
        .json({ success: false, message: "존재하지 않는 모임입니다." });
    }
    Clubs.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = clubRouter;
