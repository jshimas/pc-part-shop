const app = require('./app');
const db = require('./models');
// db.authenticate()
//   .then((err) => {
//     console.log('Connection established.');
//     (async () => await db.sync({ force: true }))();
//   })
//   .catch((err) => {
//     console.log('Unable to connect to database: ', err);
//   });

(async () => await db.sequelize.sync({ force: true }))();

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
