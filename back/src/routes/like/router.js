import { Router } from "express";
import { likeService } from "./service";
import { verifyToken } from "../../middlewares/verifyToken";

const likeRouter = Router();

likeRouter.post("/:club_id/like", verifyToken, async (req, res) => {
  try {
    const user_id = req.user;
    const club_id = req.params.club_id;

    const like = await likeService.clickLike({ user_id, club_id });

    if (like.errorMessage) {
      throw new Error(like.errorMessage);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(404).json({ success: true, err });
  }
});

export default likeRouter;
