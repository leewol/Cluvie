import Sequelize from "sequelize";

module.exports = class Applicants extends Sequelize.Model {
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
        modelName: "Applicants",
        tableName: "applicants",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
        // freezeTableName: true,
      }
    );
  }
};
