/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('external_memories', [
      {
        readSpeed: 392,
        writeSpeed: 924,
        capacity: 1000,
        connectorType: 'M.2-2280',
        partId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        readSpeed: 409,
        writeSpeed: 1752,
        capacity: 2000,
        connectorType: 'M.2-2280',
        partId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        readSpeed: 550,
        writeSpeed: 520,
        capacity: 1024,
        connectorType: 'mSATA',
        partId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('external_memories', null, {});
  },
};
