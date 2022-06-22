import db from "../../../models/index";
import Clubs from "../../../models/club";

class clubService {
  static getClublist = async () => {
    const clubList = await Clubs.findAll({});
    // let sql = "SELECT * FROM club WHERE id < page ORDER BY id DESC LIMIT 4";
    const scrollClubList = await db.sequelize.query(
      "SELECT * FROM club WHERE id < page ORDER BY id DESC LIMIT 4",
      {
        type: db.sequelize.QueryType.SELECT,
      }
    );
    console.log(scrollClubList);
    return scrollClubList;
  };
}

export { clubService };
