'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('environments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      environment_id: {
        type: Sequelize.UUID
      },
      production: {
        type: Sequelize.BOOLEAN
      },
      instance_name: {
        type: Sequelize.STRING
      },
      ws_inst: {
        type: Sequelize.STRING
      },
      database_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('environments');
  }
};