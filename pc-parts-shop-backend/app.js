const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const partRouter = require('./routes/partRouter');
const buildRouter = require('./routes/buildRouter');
const userRouter = require('./routes/userRouter');
const checkoutRouter = require('./routes/checkoutRouter');
const cartRouter = require('./routes/cartRouter');

const app = express();

dotenv.config({ path: '.env' });
app.use(express.json());
app.use('*', cors());

app.use('/api/v1/parts', partRouter);
app.use('/api/v1/builds', buildRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/checkout', checkoutRouter);
app.use('/api/v1/cart', cartRouter);

app.use('*', (req, res, next) => {
  next(new AppError(`Can not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
