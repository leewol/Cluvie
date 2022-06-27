import express from "express";
import Clubs from "../../../models/club";
import { clubService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

import { test } from "../../../config/config";

const clubRouter = express.Router();
const upload = require("../../middlewares/fileUpload");

// 공통 url: "/clubs"

// 클럽 사진 서버에 업로드
clubRouter.post("/picture", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(404).json({ success: false, message: err.message });
    }
    return res
      .status(200)
      .json({
        success: true,
        filePath: res.req.file.path,
        fileName: res.req.file.filename,
      });
  });
});

/** 클럽 생성 */
clubRouter.post("/", verifyToken, async (req, res) => {
  try {
    const {
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
    } = req.body;
    const manager = req.user;

    const club = await clubService.createClub({
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
      manager,
    });

    const club_id = club.id;
    await clubService.createClubReviewRating(club_id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

/** 전체 클럽 목록 불러오기 */
clubRouter.get("/", async (req, res) => {
  await Clubs.findAll({})
    .then((result) => {
      res.status(200).json({ success: true, result });
    })
    .catch((err) => {
      res.status(404).json({ success: false, message: err.message });
      console.log(err);
    });
});

// 메인페이지는 로그인 안하고 볼 수 있음 -> 로그인하고나서의 메인페이지 라우터
// 클럽 목록 불러오기(로그인한 유저의 좋아요 여부 포함)
clubRouter.get("/test", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const clubList = await clubService.getClubListTest({ user_id });
    res.status(200).json({ success: true, clubList });
  } catch (err) {
    res.status(404).send({ success: false, message: err.message });
  }
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

// 모임 모집 마감하기
clubRouter.patch("/close", verifyToken, async (req, res) => {
  try {
    const club_id = req.body.club_id;
    const closeApplication = await clubService.closeApplication({ club_id });

    if (closeApplication.errorMessage) {
      res
        .status(403)
        .json({ success: false, err: closeApplication.errorMessage });
      return;
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
    console.log(err);
  }
});

// 유저가 만든 모임 목록
clubRouter.get("/user", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;

    const clubList = await clubService.getClubListMadeByMe({ user_id });

    res.status(200).json({ success: true, clubList });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

// 모임 참여 후기 작성
clubRouter.post("/:club_id/review", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const club_id = req.params.club_id;
    const { star_rating, contents } = req.body;

    const review = await clubService.writeReview({
      club_id,
      user_id,
      star_rating,
      contents,
    });
    const star = review.star_rating;
    await clubService.setReviewRating({ club_id, star });

    if (review.errorMessage) {
      res.status(403).json({ success: false, err: review.errorMessage });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    if (err.message == "Validation error") {
      res.status(403).json({
        success: false,
        message: "모임 후기는 한 번만 작성할 수 있습니다",
      });
    } else {
      res.status(404).json({ success: false, message: err.message });
    }
  }
});

// 모임 참여 후기 목록 불러오기
clubRouter.get("/:club_id/review", verifyToken, async (req, res) => {
  try {
    const club_id = req.params.club_id;
    const reviews = await clubService.getAllReviews({ club_id });

    if (reviews.errorMessage) {
      res.status(403).json({ success: false, err: reviews.errorMessage });
    }
    res.status(200).json({ success: true, reviews });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

//모임 후기 평점 불러오기
clubRouter.get("/:club_id/rating", verifyToken, async (req, res) => {
  try {
    const club_id = req.params.club_id;
    const rating = await clubService.calculateRating({ club_id });

    res.status(200).json({ success: true, rating });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
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
    },
    { where: { id: req.params.id } }
  )
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(404).json({ success: false, message: err.message });
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
