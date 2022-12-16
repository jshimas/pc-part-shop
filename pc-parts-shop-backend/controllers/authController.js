const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const { User, UserRoleEnum, ShoppingCart } = require('../models');
const AppError = require('../utils/appError');

const signToken = (id) =>
  jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.status(statusCode).json({
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const existingUser = await User.findOne({ where: { email: req.body.email } });

  if (existingUser)
    return next(new AppError('User already exists with provided email'));

  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    roleEnum: req.body.roleEnum,
  });
  await ShoppingCart.create({ userId: newUser.id });

  const roleEnum = await newUser.getUserRoleEnum();
  const user = {
    ...newUser.toJSON(),
    role: roleEnum.role,
  };

  createSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password is provided
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) Check if user exists & password is correct
  const user = await User.findOne({ where: { email } });

  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything is ok, send token to client
  const currentUser = await User.findByPk(user.id, {
    include: UserRoleEnum,
  });

  user.role = currentUser.UserRoleEnum.role;
  createSendToken(user, 200, res);
});

exports.getUserData = catchAsync(async (req, res, next) => {
  const { jwt: token } = req.cookies;

  let currentUser;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id, {
      include: {
        model: UserRoleEnum,
        attributes: ['role'],
      },
      attributes: ['id', 'firstName', 'lastName', 'fullName', 'email'],
    });
    currentUser = user.toJSON();
    currentUser.role = currentUser.UserRoleEnum.role;
  } else {
    currentUser = {
      role: 'guest',
    };
  }

  res.status(200).json({
    currentUser,
  });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie('jwt');
  res.status(204).json({});
});
