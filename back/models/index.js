const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
// 모델
import Users from "./users";
import Club from "./club";

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    logging: true,
  }
);
// db 객체에 모델 정보들 넣음
db.sequelize = sequelize;
db.Users = Users;
db.Club = Club;

//모델 - 테이블 연결
Users.init(sequelize);
Club.init(sequelize);
module.exports = db;
