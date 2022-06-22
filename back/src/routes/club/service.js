import db from "../../../models/index";
import Clubs from "../../../models/club";

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
    // let startFrom = page * (page - 1);
    // console.log("확인:", startFrom);
    console.log("확인:", club_id);
    let sql = `SELECT * FROM clubs WHERE id < ${club_id}  ORDER BY id DESC LIMIT  4`;
    const scrollClubList = await db.sequelize.query(sql, {
      type: db.sequelize.QueryTypes.SELECT,
    });
    console.log(scrollClubList);
    return scrollClubList;
  };
}

export { clubService };
