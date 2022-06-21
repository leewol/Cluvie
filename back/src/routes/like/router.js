import { Router } from "express";
import { likeService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const likeRouter = Router();

// 모임 찜하기 -> 똑같은 모임 또 찜 누르면 오류 응답
likeRouter.post("/:club_id", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const club_id = req.params.club_id;

    const like = await likeService.clickLike({ user_id, club_id });

    if (like.errorMessage) {
      throw new Error(like.errorMessage);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, err });
  }
});

// 모임 찜하기 해제
likeRouter.delete("/:club_id", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const club_id = req.params.club_id;

    const unlike = await likeService.unlike({ user_id, club_id });

    if (unlike.errorMessage) {
      throw new Error(unlike.errorMessage);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, err });
  }
});

// 사용자가 찜한 모임 목록 GET
likeRouter.get("/clubs", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const likeClubList = likeService.getUserLikeClub({ user_id });

    if (likeClubList.errorMessage) {
      throw new Error(likeClubList.errorMessage);
    }
    res.status(200).json({ success: true, likeClubList });
  } catch (err) {
    res.status(404).json({ success: false, err });
    console.log(err);
  }
});

export default likeRouter;
