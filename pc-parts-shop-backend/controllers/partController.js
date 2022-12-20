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
    case 'psu':
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
  var newSecondaryPart;

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

  switch (type) {
    case 'cpu':
      newSecondaryPart = await CPU.create({
        socketStandart: secondaryPart.socketStandart,
        frequancy: secondaryPart.frequancy,
        coreQuantity: secondaryPart.coreQuantity,
        threadQuantity: secondaryPart.threadQuantity,
        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    case 'gpu':
      newSecondaryPart = await GPU.create({
        vramQuantity: secondaryPart.vramQuantity,
        vramFrequancy: secondaryPart.vramFrequancy,
        frequancy: secondaryPart.frequancy,
        pcieStandartEnum: secondaryPart.pcieStandartEnum,
        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    case 'cooler':
      newSecondaryPart = await Cooler.create({
        height: secondaryPart.height,
        createdAt: new Date(),
        updatedAt: new Date(),
        partId: newPart.id,
      });
      break;
    case 'memory':
      newSecondaryPart = await ExternalMemory.create({
        readSpeed: secondaryPart.readSpeed,
        writeSpeed: secondaryPart.writeSpeed,
        capacity: secondaryPart.capacity,
        connectorType: secondaryPart.connectorType,
        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    case 'motherboard':
      newSecondaryPart = await Motherboard.create({
        cpuSocketStandart: secondaryPart.cpuSocketStandart,
        cpuSocketQuantity: secondaryPart.cpuSocketQuantity,
        ramTypeEnum: secondaryPart.ramTypeEnum,
        ramSocketQuantity: secondaryPart.ramSocketQuantity,
        m2ssdSocketQuantity: secondaryPart.m2ssdSocketQuantity,
        sataSocketQuantity: secondaryPart.sataSocketQuantity,
        pcieStandartEnum: secondaryPart.pcieStandartEnum,
        pcieSocketQuantity: secondaryPart.pcieSocketQuantity,
        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    case 'psu':
      newSecondaryPart = await PSU.create({
        powerCapacity: secondaryPart.powerCapacity,

        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    case 'ram':
      newSecondaryPart = await RAM.create({
        frequancy: secondaryPart.frequancy,
        capacity: secondaryPart.capacity,
        ramTypeEnum: secondaryPart.ramTypeEnum,

        partId: newPart.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      break;
    default:
      res.status(500).json({
        status: 'error',
        message: 'wrong part type entered',
      });
      return;
  }

  res.status(201).json({
    status: 'success',
    message: 'Part Added!',

    newPart,
    newSecondaryPart,
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
