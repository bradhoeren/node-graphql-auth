'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact_person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contact_person.init({
    person_id: DataTypes.UUID,
    campus_id: DataTypes.UUID,
    given_name: DataTypes.STRING,
    surname: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    preferred_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'contact_person',
  });
  return contact_person;
};