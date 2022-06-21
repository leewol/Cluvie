import Likes from "../../../models/like";
import Clubs from "../../../models/club";
import Applicants from "../../../models/applicant";
import Acceptances from "../../../models/acceptance";
import Users from "../../../models/user";
import db from "../../../models/index";

class applicantService {
  static application = async ({ user_id, club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 클럽이 존재하지 않습니다.";
      return { errorMessage };
    } else {
      const applicated = await Applicants.create({
        user_id,
        club_id,
      });
      return applicated;
    }
  };
  static cancelApplication = async ({ user_id, club_id }) => {
    const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 클럽이 존재하지 않습니다.";
      return { errorMessage };
    } else {
      const canceled = await Applicants.destroy({
        where: { user_id, club_id },
      });
      return canceled;
    }
  };
  static getApplyingClubs = async ({ user_id }) => {
    const user = await Users.findOne({ where: { id: user_id } });
    if (!user) {
      const errorMessage = "해당 사용자를 찾을 수 없습니다.";
      return { errorMessage };
    } else {
      const applyingClubList = await db.sequelize.query(
        "SELECT a.user_id, a.club_id, c.id, c.name, c.intro, c.picture FROM applicants AS a LEFT JOIN clubs AS c ON a.club_id = c.id WHERE user_id",
        { type: db.sequelize.QueryTypes.SELECT }
      );
      console.log(applyingClubList);
      return applyingClubList;
    }
  };
}

export { applicantService };
