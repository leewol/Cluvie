const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];
// 모델
import Chats from "./chat";
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
db.Chats = Chats;

//모델 - 테이블 연결

Chats.init(sequelize);

module.exports = db;
