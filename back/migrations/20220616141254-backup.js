"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.removeColumn("clubs", "online");
    // await queryInterface.removeColumn("clubs", "offline");
    // await queryInterface.removeColumn("clubs", "weekday");
    // await queryInterface.removeColumn("clubs", "weekend");
    // await queryInterface.renameColumn("clubs", "headCount", "head_count");
    // await queryInterface.addColumn("clubs", "offline", {
    //   type: Sequelize.TINYINT,
    //   allowNull: true,
    //   defaultValue: 0,
    // });
    // await queryInterface.addColumn("clubs", "weekday", {
    //   type: Sequelize.TINYINT,
    //   allowNull: true,
    //   defaultValue: 0,
    // });
    // await queryInterface.addColumn("clubs", "hashtags", {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
