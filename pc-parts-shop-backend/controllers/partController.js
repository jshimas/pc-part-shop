const { Part } = require('../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getParts = catchAsync(async (req, res, next) => {
  const { type } = req.query;
  const parts = await Part.findAll({ where: { type: type } });
  console.log(parts);
  if (!parts) return next(new AppError('No parts found'));

  res.status(200).json({
    status: 'success',
    parts,
  });
});

exports.createPart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
