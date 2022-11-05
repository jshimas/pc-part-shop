/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      socketStandart: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      frequancy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      coreQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      threadQuantity: {
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
    await queryInterface.dropTable('cpus');
  },
};
