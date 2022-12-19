const {
  Part,
  CPU,
  Cooler,
  GPU,
  ExternalMemory,
  Motherboard,
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
  var secondaryPart;

  const mainPart = await Part.findOne({ where: { id: partId } });
  if (!mainPart) return next(new AppError('No parts found'));

  switch (type) {
    case 'cpu':
      secondaryPart = await CPU.findOne({ where: { partId: partId } });
      break;
    case 'gpu':
      secondaryPart = await GPU.findOne({ where: { partId: partId } });
      break;
    case 'cooler':
      secondaryPart = await Cooler.findOne({ where: { partId: partId } });
      break;
    case 'memory':
      secondaryPart = await ExternalMemory.findOne({
        where: { partId: partId },
      });
      break;
    case 'motherboard':
      secondaryPart = await Motherboard.findOne({ where: { partId: partId } });
      break;
    case 'PSU':
      secondaryPart = await PSU.findOne({ where: { partId: partId } });
      break;
    case 'ram':
      secondaryPart = await RAM.findOne({ where: { partId: partId } });
      break;
    default:
      res.status(500).json({
        status: 'error',
        message: 'wrong part type entered',
      });
      return;
  }

  //console.log(mainPart);

  res.status(200).json({
    status: 'success',
    mainPart,
    secondaryPart,
  });
});

exports.createPart = catchAsync(async (req, res) => {
  const { partName, type, manufacturer, releaseDate, price, details } =
    req.body;
  console.log(partName);

  const newPart = await Part.create({
    name: partName,
    type: type,
    manufacturer: manufacturer,
    releaseDate: releaseDate,
    price: price,
    details: details,
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
