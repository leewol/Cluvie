import Sequelize from "sequelize";

module.exports = class Reviews extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        club_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        star_score: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        contents: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn("NOW"),
        },
        updated_at: {
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
        modelName: "Reviews",
        tableName: "reviews",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
