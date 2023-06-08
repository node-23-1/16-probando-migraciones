'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'releaseDate', 'release_date')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'release_date', 'releaseDate')
  }
};
