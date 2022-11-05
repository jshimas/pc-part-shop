/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motherboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cpuSocketStandart: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpuSocketQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ramType: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ramSocketQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      m2ssdSocketQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sataSocketQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pcieStandart: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pcieSocketQuantity: {
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
    await queryInterface.dropTable('motherboards');
  },
};
