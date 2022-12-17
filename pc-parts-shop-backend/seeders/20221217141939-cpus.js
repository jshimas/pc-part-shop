/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('cpus', [
      {
        socketStandart: 'LGA1700',
        frequancy: 3,
        coreQuantity: 12,
        threadQuantity: 20,
        partId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socketStandart: 'AM4',
        frequancy: 3,
        coreQuantity: 6,
        threadQuantity: 12,
        partId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        socketStandart: 'AM4',
        frequancy: 3,
        coreQuantity: 8,
        threadQuantity: 16,
        partId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('cpus', null, {});
  },
};
