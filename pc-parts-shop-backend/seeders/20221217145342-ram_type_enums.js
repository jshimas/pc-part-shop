/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ram_type_enums', [
      {
        id: 1,
        ramType: 'DDR3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ramType: 'DDR4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        ramType: 'DDR5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ram_type_enums', null, {});
  },
};
