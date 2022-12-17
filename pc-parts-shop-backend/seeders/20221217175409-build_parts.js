/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('build_parts', [
      {
        quantity: 1,
        buildId: 1,
        partId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: 1,
        buildId: 1,
        partId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('build_parts', null, {});
  },
};
