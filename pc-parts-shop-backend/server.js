const sequelize = require('./db/config');
const app = require('./app');

sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection established.');
  })
  .catch((err) => {
    console.log('Unable to connect to database: ', err);
  });

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
