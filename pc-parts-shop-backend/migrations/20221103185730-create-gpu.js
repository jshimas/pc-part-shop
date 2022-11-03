/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GPUs', {
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
      pcieStandart: {
        type: Sequelize.ENUM,
        allowNull: false,
      },
      partId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
  async down(queryInterface) {
    await queryInterface.dropTable('GPUs');
  },
};
