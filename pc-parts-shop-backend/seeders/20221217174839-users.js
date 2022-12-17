/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'user',
        lastName: 'user',
        email: 'user@user.com',
        roleEnum: '1',
        password:
          '$2a$12$kedgUbmEu73piumM1MV./OGiNM6VY64sPE46P66A2HYvcaOYxxl4u',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
