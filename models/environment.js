'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class environment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  environment.init({
    environment_id: DataTypes.UUID,
    production: DataTypes.BOOLEAN,
    instance_name: DataTypes.STRING,
    ws_inst: DataTypes.STRING,
    database_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'environment',
  });
  return environment;
};