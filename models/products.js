'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  products.init({
    product_id: DataTypes.UUID,
    name_short: DataTypes.STRING,
    name_long: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};