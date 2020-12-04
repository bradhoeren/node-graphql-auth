'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('configuration_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      configuration_id: {
        type: Sequelize.UUID,
      },
      architecture_layer: {
        type: Sequelize.ENUM,
        values: ['client_application', 'web', 'middleware', 'authentication', 'database_connection'],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('configuration_types');
  },
};
