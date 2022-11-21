/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('user_role_enums', [
      { id: 1, role: 'user', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, role: 'admin', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user_role_enums', null, {});
  },
};
