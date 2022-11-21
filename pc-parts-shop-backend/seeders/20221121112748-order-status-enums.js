/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('order_status_enums', [
      {
        id: 1,
        orderStatus: 'new',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        orderStatus: 'on hold',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        orderStatus: 'shipped',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        orderStatus: 'delivered',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        orderStatus: 'canceled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user_role_enums', null, {});
  },
};
