"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn("clubs", "weekday", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "weekend", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "online", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "offline", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "hashtags", {
    //   type: Sequelize.STRING,
    //   allowNUll: true,
    // });
    // await queryInterface.addColumn("clubs", "duration", {
    //   type: Sequelize.TINYINT,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "state", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    // await queryInterface.addColumn("clubs", "manager", {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // queryInterface.removeColumn("clubs", "start_date");
    // queryInterface.removeColumn("clubs", "end_date");
  },
};
