'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contact_email.init({
    contact_email_id: DataTypes.UUID,
    name: DataTypes.STRING,
    domain: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact_email',
  });
  return contact_email;
};