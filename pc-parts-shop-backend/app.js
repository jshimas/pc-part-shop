const express = require('express');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const partRouter = require('./routes/partRouter');
const buildRouter = require('./routes/partRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/parts', partRouter);
app.use('/api/v1/builds', buildRouter);

app.use('*', (req, res, next) => {
  next(new AppError(`Can not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
