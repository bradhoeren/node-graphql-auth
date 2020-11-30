'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class configuration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  configuration.init({
    configuration_id: DataTypes.UUID,
    configuration: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'configuration',
  });
  return configuration;
};