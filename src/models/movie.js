'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movie.belongsTo(models.genre);

      movie.belongsToMany(models.actor, { through: "MoviesActors" });
    }
  }
  movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: DataTypes.STRING,
    release_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};