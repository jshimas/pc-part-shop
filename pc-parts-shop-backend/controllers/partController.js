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
  const {
    partName,
    type,
    manufacturer,
    releaseDate,
    price,
    details,
    secondaryPart,
  } = req.body;

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

  const newSecondaryPart = await CPU.create({
    socketStandart: secondaryPart.socketStandart,
    frequancy: secondaryPart.socketStandart,
    coreQuantity: secondaryPart.coreQuantity,
    threadQuantity: secondaryPart.threadQuantity,
    partId: newPart.id,
  });
  const idee = newPart.id;

  res.status(201).json({
    status: 'success',
    message: 'Part Added!',
    idee,
    // newPart,
    //newSecondaryPart,
  });
});

exports.deletePart = catchAsync(async (req, res) => {
  const { partId } = req.query; //req.query;
  var secondaryPartToDestroy;

  const partToDestroy = await Part.findOne({ where: { id: partId } });

  console.log(partToDestroy);

  if (!partToDestroy) return next(new AppError('No part to destroy'));

  const type = partToDestroy.type;
  switch (type) {
    case 'cpu':
      secondaryPartToDestroy = await CPU.findOne({ where: { partId: partId } });
      break;
    case 'gpu':
      secondaryPartToDestroy = await GPU.findOne({ where: { partId: partId } });
      break;
    case 'cooler':
      secondaryPartToDestroy = await Cooler.findOne({
        where: { partId: partId },
      });
      break;
    case 'memory':
      secondaryPartToDestroy = await ExternalMemory.findOne({
        where: { partId: partId },
      });
      break;
    case 'motherboard':
      secondaryPartToDestroy = await Motherboard.findOne({
        where: { partId: partId },
      });
      break;
    case 'PSU':
      secondaryPartToDestroy = await PSU.findOne({ where: { partId: partId } });
      break;
    case 'ram':
      secondaryPartToDestroy = await RAM.findOne({ where: { partId: partId } });
      break;
    default:
      return;
  }
  if (!secondaryPartToDestroy) return next(new AppError('No part to destroy'));

  const destroyedMain = await partToDestroy.destroy({
    force: true,
  });
  const destroyedSecond = await secondaryPartToDestroy.destroy({
    force: true,
  });

  res.status(204).json({
    status: 'Destroed',
    message: 'test',
    partToDestroy,
    partId,
    // destroyedMain,
    // destroyedSecond,
  });
});

exports.editPart = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
