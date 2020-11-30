'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_License extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_License.init({
    valid_until: DataTypes.DATE,
    contract_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_License',
  });
  return product_License;
};