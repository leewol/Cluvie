import Reviews from "../../../models/review";
import Users from "../../../models/user";
import Clubs from "../../../models/club";
import Applicants from "../../../models/applicant";
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

  static closeApplication = async ({ club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "존재하지 않는 모임입니다.";
      return { errorMessage };
    }
    const closeApplication = await club.update({ state: "모집마감" });
    await Applicants.update({ status: 2 }, { where: { club_id, status: 0 } });
    return { closeApplication };
  };

  static writeReview = async ({ user_id, club_id, star_score, contents }) => {
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
