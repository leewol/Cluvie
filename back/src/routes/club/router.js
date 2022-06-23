import express from "express";
import Clubs from "../../../models/club";
import { clubService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";
import { test } from "../../../config/config";

const clubRouter = express.Router();

// 공통 url: "/clubs"

/** 클럽 생성 */
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

/** 전체 클럽 목록 불러오기 */
clubRouter.get("/", async (req, res) => {
  await Clubs.findAll({})
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, err });
      console.log(err);
    });
});

/** 클럽 4개씩 불러오기
 * @param club_id 가장 최근 클럽ID
 */
clubRouter.get("/scrollClublist/:club_id", async (req, res, next) => {
  try {
    const currentClubId = req.params.club_id;
    const scrollClublist = await clubService.getClublist(currentClubId);
    res.json({ success: true, scrollClublist });
  } catch (err) {
    next(err);
  }
});

/** 클럽 1개씩 불러오기
 * @param id 클럽ID
 */
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

/** 클럽 수정
 * @param id 클럽ID
 */
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

/** 클럽 삭제
 * @param id 클럽ID
 */
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
