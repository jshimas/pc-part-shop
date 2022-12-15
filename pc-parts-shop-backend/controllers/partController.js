const { Part } = require('../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getParts = catchAsync(async (req, res, next) => {
  const { type, partId, action } = req.query;
  var parts;

  if (action === 'single') {
    parts = await Part.findOne({ where: { id: partId } });
  } else {
    parts = await Part.findAll({ where: { type: type } });
  }

  if (!parts) return next(new AppError('No parts found'));

  res.status(200).json({
    status: 'success',
    parts,
  });
});

exports.createPart = catchAsync(async (req, res) => {
  const { partName } = req.body;
  console.log(partName);

  const newPart = await Part.create({
    name: partName,
    type: 'cpu',
    manufacturer: 'createTest',
    releaseDate: 'createTest',
    price: 420,
    details: 'createTest',
    createdAt: 'createTest',
    updatedAt: 'createTest',
  });

  res.status(201).json({
    status: 'success',
    message: 'Part Added!',
    newPart,
  });
});

exports.deletePart = catchAsync(async (req, res, next) => {
  const { partId } = req.query;

  const partToDestroy = await Part.findOne({ where: { id: partId } });

  if (!partToDestroy) return next(new AppError('No part to destroy'));

  await partToDestroy.destroy({ force: true });

  res.status(204).json({});
});

exports.editPart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
