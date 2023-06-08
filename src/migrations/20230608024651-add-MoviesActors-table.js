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
    await queryInterface.createTable('MoviesActors', {
      movieId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'movies', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
      actorId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'actors', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
			createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
