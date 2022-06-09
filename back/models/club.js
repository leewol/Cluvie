import Sequelize from "sequelize";

module.exports = class Club extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        club_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        picture: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        intro: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        day: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        views: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        num: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        process: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        startDate: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        endDate: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn("Now"),
        },
        is_deleted: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: "0",
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("Now"),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Club",
        tableName: "club",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
