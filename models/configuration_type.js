'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class configuration_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  configuration_type.init(
    {
      configuration_id: DataTypes.UUID,
      architecture_layer: {
        type: Sequelize.ENUM,
        values: ['client_application', 'web', 'middleware', 'authentication', 'database_connection'],
      },
    },
    {
      sequelize,
      modelName: 'configuration_type',
    }
  );
  return configuration_type;
};
