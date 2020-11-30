'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class institution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  institution.init({
    institution_id: DataTypes.UUID,
    name: DataTypes.STRING,
    customer: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'institution',
  });
  return institution;
};