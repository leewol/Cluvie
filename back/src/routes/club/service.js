import Reviews from "../../../models/review";
import Users from "../../../models/user";
import Clubs from "../../../models/club";
import Applicants from "../../../models/applicant";
import Ratings from "../../../models/rating";
import db from "../../../models/index";

class clubService {
  //   static getClublist = async (page) => {
  //     const clubList = await Clubs.findAll({});
  //     let startFrom = page * (page - 1);
  //     console.log("확인:", startFrom);
  //     let sql = `SELECT * FROM clubs WHERE id >= ${startFrom} ORDER BY id DESC LIMIT ${startFrom}, 4`;
  //     const scrollClubList = await db.sequelize.query(sql, {
  //       type: db.sequelize.QueryTypes.SELECT,
  //     });
  //     console.log(scrollClubList);
  //     return scrollClubList;
  //   };

  static createClub = async ({
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
  }) => {
    const club = await Clubs.create({
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
    return club;
  };

  static createClubReviewRating = async (club_id) => {
    const reviewRating = await Ratings.create({ club_id });
    return reviewRating;
  };

  static getClublist = async (club_id) => {
    const clubList = await Clubs.findAll({});
    console.log("확인:", club_id);
    let sql = `SELECT * FROM clubs WHERE id <= ${club_id}  ORDER BY id DESC LIMIT  4`;
    const scrollClubList = await db.sequelize.query(sql, {
      type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(scrollClubList);
    return scrollClubList;
  };

  static getClubListMadeByMe = async ({ user_id }) => {
    const clubList = await Clubs.findAll({ where: { manager: user_id } });
    return { clubList };
  };

  static closeApplication = async ({ club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "존재하지 않는 모임입니다.";
      return { errorMessage };
    }
    const closeApplication = await club.update({ state: 1 });
    await Applicants.update({ status: 2 }, { where: { club_id, status: 0 } });
    return closeApplication;
  };

  static writeReview = async ({ user_id, club_id, star_rating, contents }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    const user = await Users.findOne({ where: { id: user_id } });
    if (!club) {
      const errorMessage = "존재하지 않는 모임입니다.";
      return { errorMessage };
    }
    if (!user) {
      const errorMessage = "해당 사용자를 찾을 수 없습니다";
      return { errorMessage };
    } else {
      const review = await Reviews.create({
        user_id,
        club_id,
        star_rating,
        contents,
      });
      return review;
    }
  };

  static getAllReviews = async ({ club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "존재하지 않는 모임입니다.";
      return { errorMessage };
    }
    const reviews = await db.sequelize.query(
      "SELECT u.id, u.nickname, r.club_id, r.star_rating, r.contents FROM reviews AS r LEFT JOIN users AS u ON r.user_id = u.id WHERE r.club_id=:id ORDER BY r.created_at DESC",
      { replacements: { id: club_id }, type: db.sequelize.QueryTypes.SELECT }
    );
    return reviews;
  };

  static setReviewRating = async ({ club_id, star }) => {
    await Ratings.increment({ count: 1 }, { where: { club_id: club_id } });
    await Ratings.increment("star_sum", {
      by: star,
      where: { club_id: club_id },
    });
  };

  static calculateRating = async ({ club_id }) => {
    const ratingData = await Ratings.findOne({ where: { club_id: club_id } });
    const rating = ratingData.star_sum / ratingData.count;

    const result = await ratingData.update(
      { rating: rating },
      { where: { club_id: club_id } }
    );
    return result.rating.toFixed(1); //소수점 한자리까지 표현
  };
}
export { clubService };
