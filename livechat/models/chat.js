import Sequelize from "sequelize";

module.exports = class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING(1500),
        },
        to: {
          type: Sequelize.STRING,
        },
        room_name: {
          type: Sequelize.STRING,
        },
        socket_id: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Chats",
        tableName: "chats",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
