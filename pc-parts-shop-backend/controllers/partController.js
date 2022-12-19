const {
  Part,
  CPU,
  Coolers,
  GPU,
  ExternalMemories,
  Motherboards,
  PSU,
  RAM,
} = require('../models');
//const { users } = require('../user.js');

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

exports.getOnePart = catchAsync(async (req, res, next) => {
  const { type, partId } = req.query;

  const mainPart = await Part.findOne({ where: { id: partId } });
  if (!mainPart) return next(new AppError('No parts found'));

  const secondaryPart = await CPU.findOne({ where: { partId: partId } });
  //console.log(mainPart);

  res.status(200).json({
    status: 'success',
    mainPart,
    secondaryPart,
  });
});

exports.createPart = catchAsync(async (req, res) => {
  const { partName, type, manufacturer, releaseDate, price } = req.body;
  console.log(partName);

  const newPart = await Part.create({
    name: partName,
    type: type,
    manufacturer: manufacturer,
    releaseDate: releaseDate,
    price: price,
    details: 'createTest',
    createdAt: new Date(),
    updatedAt: new Date(),
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
