import db from "../../../models/index";
import Clubs from "../../../models/club";

class clubService {
  static getClublist = async (req, res) => {
    const clubList = await Clubs.findAll({});
    let sql = "SELECT * FROM clubs WHERE id < 30 ORDER BY id DESC LIMIT 4";
    const scrollClubList = await db.sequelize.query(sql, {
      type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(scrollClubList);
    return scrollClubList;
  };
}

export { clubService };
