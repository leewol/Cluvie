import { QueryTypes } from "sequelize";
import sequelize from "sequelize";
import Likes from "../../../models/like";
import Clubs from "../../../models/club";
import Users from "../../../models/user";

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

  static getUserLikeClub = async ({ user_id }) => {
    const user = await Users.findOne({ where: { id: user_id } });
    if (!user) {
      const errorMessage = "해당 사용자를 찾을 수 없습니다.";
      return { errorMessage };
    } else {
      // const likeClubList = await sequelize.query(
      //   "SELECT * FROM Clubs INNER JOIN Likes ON (Likes.club_id = Clubs.id) WHERE Likes.user_id = user_id ",
      //   { type: QueryTypes.SELECT }
      // );
      const likeClubList = await sequelize.query(
        "SELECT * FROM Likes WHERE Likes.user_id = user_id"
      );
      console.log(likeClubList);
      return likeClubList;
    }
  };
}

export { likeService };
