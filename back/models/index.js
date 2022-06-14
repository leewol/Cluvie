const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
// 모델
import User from "./user";
import Clubs from "./club";

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// db 객체에 모델 정보들 넣음
db.sequelize = sequelize;
db.User = User;
db.Club = Clubs;

//모델 - 테이블 연결
User.init(sequelize);
Clubs.init(sequelize);
module.exports = db;
