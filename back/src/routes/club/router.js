import express from "express";
import Clubs from "../../../models/club";
import { verifyToken } from "../../middlewares/verifyToken";
// 조회수
const clubRouter = express.Router();

clubRouter.post("/", verifyToken, async (req, res) => {
  let club = req.body;
  club.views = 0;
  // club.manager = req.user;
  await Clubs.create(club)
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.json({ success: false, err });
    });
});

clubRouter.get("/", async (req, res) => {
  await Clubs.findAll({})
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
    });
});

clubRouter.get("/:id", verifyToken, async (req, res, next) => {
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
  await Clubs.update(
    {
      name: req.body.name,
      intro: req.body.intro,
      online: req.body.online,
      offline: req.body.offline,
      description: req.body.description,
      head_count: req.body.num,
      picture: req.body.picture,
      weekday: req.body.weekday,
      weekend: req.body.weekend,
      duration: req.body.duration,
      state: req.body.state,
      hashtags: req.body.hashtags,
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