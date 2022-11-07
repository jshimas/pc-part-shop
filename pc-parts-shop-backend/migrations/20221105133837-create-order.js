/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paymentDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shippingDate: {
        type: Sequelize.STRING,
      },
      deliveryDate: {
        type: Sequelize.STRING,
      },
      deliveryAddressId: {
        type: Sequelize.STRING,
      },
      totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      details: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('orders');
  },
};
