/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('pcie_standart_enums', [
      {
        id: 1,
        pcieStandart: 'x4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        pcieStandart: 'x8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        pcieStandart: 'x16',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('pcie_standart_enums', null, {});
  },
};
