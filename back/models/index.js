const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];
// 모델
import Users from "./user";
import Clubs from "./club";
import Likes from "./like";
import Applicants from "./applicant";
import Acceptances from "./acceptance";
import Reviews from "./review";
import Grades from "./grade";

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
db.Clubs = Clubs;
db.Likes = Likes;
db.Applicants = Applicants;
db.Acceptances = Acceptances;
db.Reviews = Reviews;
db.Grades = Grades;

//모델 - 테이블 연결
Users.init(sequelize);
Clubs.init(sequelize);
Likes.init(sequelize);
Applicants.init(sequelize);
Acceptances.init(sequelize);
Reviews.init(sequelize);
Grades.init(sequelize);

module.exports = db;
