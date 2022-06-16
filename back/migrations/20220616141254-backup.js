"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("clubs", "manager_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    queryInterface.changeColumn("clubs", "duration_of_progress", {
      type: Sequelize.TINYINT,
      allowNull: false,
    });
    queryInterface.addColumn("clubs", "club_state", {
      type: Sequelize.STRING(10),
      allowNull: false,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("clubs", "start_date");
    queryInterface.removeColumn("clubs", "end_date");
  },
};
