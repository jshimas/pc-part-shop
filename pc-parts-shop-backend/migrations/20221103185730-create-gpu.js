/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vramQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vramFrequancy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      frequancy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pcieStandartEnum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      partId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('gpus');
  },
};
