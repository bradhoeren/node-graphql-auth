'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class database_server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  database_server.init(
    {
      database_server_id: DataTypes.UUID,
      name: DataTypes.STRING,
      type: {
        type: Sequelize.ENUM,
        values: ['series', 'replication', 'x25'],
      },
    },
    {
      sequelize,
      modelName: 'database_server',
    }
  );
  return database_server;
};
