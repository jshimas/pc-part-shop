/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('rams', [
      {
        frequancy: 3200,
        capacity: 8,
        ramTypeEnum: 2,
        partId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequancy: 3600,
        capacity: 16,
        ramTypeEnum: 2,
        partId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequancy: 8000,
        capacity: 16,
        ramTypeEnum: 3,
        partId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('rams', null, {});
  },
};
