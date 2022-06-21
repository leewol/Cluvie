import Likes from "../../../models/like";
import Clubs from "../../../models/club";
import Applicants from "../../../models/applicant"

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
    }
    static cancelApplication = async ({user_id, club_id}) => {
        const club = await Clubs.findOne({ where: { id: club_id } });
    if (!club) {
      const errorMessage = "해당 클럽이 존재하지 않습니다.";
      return { errorMessage };
    } else {
      const canceled = await Likes.destroy({
        where: { user_id, club_id },
      });
      return canceled;
    }
}}

export {applicantService}