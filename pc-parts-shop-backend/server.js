const app = require('./app');
const { sequelize } = require('./models');
// db.authenticate()
//   .then((err) => {
//     console.log('Connection established.');
//     (async () => await db.sync({ force: true }))();
//   })
//   .catch((err) => {
//     console.log('Unable to connect to database: ', err);
//   });

(async () => await sequelize.authenticate())();

const port = 8000;
app.listen(port, async () => {
  console.log(`App running on port ${port}...`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
