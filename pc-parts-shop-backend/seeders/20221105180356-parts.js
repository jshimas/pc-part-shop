/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('parts', [
      {
        name: 'AMD Ryzen 5 5600X',
        type: 'cpu',
        manufacturer: 'AMD',
        releaseDate: '2020-11-03',
        price: 158.97,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Intel Core i7-12700K',
        type: 'cpu',
        manufacturer: 'Intel',
        releaseDate: '2021-10-18',
        price: 357.95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AMD Ryzen 7 5800X',
        type: 'cpu',
        manufacturer: 'AMD',
        releaseDate: '2022-03-25',
        price: 248.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Corsair Vengeance LPX 16 GB',
        type: 'memory',
        manufacturer: 'Corsair',
        releaseDate: '2021-06-07',
        price: 54.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Corsair Vengeance RGB Pro 32 GB',
        type: 'memory',
        manufacturer: 'Corsair',
        releaseDate: '2022-01-16',
        price: 114.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('parts', null, {});
  },
};
