import Likes from "../../../models/like";
import Clubs from "../../../models/club";

class likeService {
  static clickLike = async ({ user_id, club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 클럽이 존재하지 않습니다.";
      return { errorMessage };
    } else {
      const liked = await Likes.create({
        user_id,
        club_id,
      });
      return liked;
    }
  };

  static unlike = async ({ user_id, club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 클럽이 존재하지 않습니다.";
      return { errorMessage };
    } else {
      const unliked = await Likes.destroy({
        where: { user_id, club_id },
      });
      return unliked;
    }
  };
}

export { likeService };
