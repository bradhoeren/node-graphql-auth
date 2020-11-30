'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contact_phone.init({
    number: DataTypes.STRING,
    call: DataTypes.BOOLEAN,
    text: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'contact_phone',
  });
  return contact_phone;
};