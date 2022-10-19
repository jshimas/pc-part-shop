const app = require('./app');

// db.authenticate()
//   .then((err) => {
//     console.log('Connection established.');
//     (async () => await db.sync({ force: true }))();
//   })
//   .catch((err) => {
//     console.log('Unable to connect to database: ', err);
//   });

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
