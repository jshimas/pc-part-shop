/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('motherboards', [
      {
        cpuSocketStandart: 'AM4',
        cpuSocketQuantity: 1,
        ramTypeEnum: 2,
        ramSocketQuantity: 4,
        m2ssdSocketQuantity: 4,
        sataSocketQuantity: 6,
        pcieStandartEnum: 3,
        pcieSocketQuantity: 2,
        partId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cpuSocketStandart: 'LGA1700',
        cpuSocketQuantity: 1,
        ramTypeEnum: 2,
        ramSocketQuantity: 4,
        m2ssdSocketQuantity: 2,
        sataSocketQuantity: 6,
        pcieStandartEnum: 3,
        pcieSocketQuantity: 2,
        partId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('motherboards', null, {});
  },
};
