/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('gpus', [
      {
        vramQuantity: 12,
        vramFrequancy: 15000,
        frequancy: 1320,
        pcieStandartEnum: 'x16',
        partId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vramQuantity: 2,
        vramFrequancy: 1600,
        frequancy: 954,
        pcieStandartEnum: 'x8',
        partId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('gpus', null, {});
  },
};
