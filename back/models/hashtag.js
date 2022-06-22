import Sequelize from "sequelize";

module.exports = class Hashtags extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        club_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        hashtag1: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        hashtag2: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        hashtag3: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn("NOW"),
        },
        is_deleted: {
          type: Sequelize.TINYINT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Hashtags",
        tableName: "hashtags",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
