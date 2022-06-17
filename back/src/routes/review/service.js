import Reviews from "../../../models/review";
import Clubs from "../../../models/club";

class reviewService {
  static writeReivew = async ({ user_id, club_id, contents }) => {
    //user_id 를 users 모델에서 검색해서 nickname을 불러와서 get 할때 넣어주는가?
    //혹은 table join?
    let club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 모임이 없습니다.";
    } else if (!user) {
    }
  };
}
