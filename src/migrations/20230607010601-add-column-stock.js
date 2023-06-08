'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('products', 'stock', {
      type: Sequelize.INTEGER
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'stock')
  }
};
