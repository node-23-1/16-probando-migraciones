'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.brand);

      product.belongsToMany(models.category, { through: 'productsCategories' });
    }
  }
  product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.INTEGER,
    is_available: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};