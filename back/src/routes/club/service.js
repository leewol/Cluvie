// import Clubs from "../../../models/club";
// import {hashPassword} from "../../utils/hashPassword";
// import {makeToken} from "../../utils/makeToken";
import Reviews from "../../../models/review";
import Clubs from "../../../models/club";
import Users from "../../../models/user";
// import dotenv from "dotenv";
// dotenv.config();

// class clubService {
//     static
// }

class clubService {
  static writeReview = async ({ user_id, club_id, star_score, contents }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    const user = await Users.findOne({ where: { id: user_id } });
    if (!club) {
      const errorMessage = "해당 모임이 없습니다.";
      return { errorMessage };
    }
    if (!user) {
      const errorMessage = "해당 사용자를 찾을 수 없습니다";
      return { errorMessage };
    } else {
      const review = await Reviews.create({
        user_id,
        club_id,
        star_score,
        contents,
      });
      await grades
        .findOne({ where: club_id })
        .increment({ count: 1, grade: star_score });
      console.log(updateGrade);
      return review;
    }
  };
}

export { clubService };
