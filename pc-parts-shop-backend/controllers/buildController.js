const {
  User,
  Build,
  BuildPart,
  Part,
  CompatiblePart,
  CPU,
  Motherboard,
  RAM,
  GPU,
  ExternalMemory,
  PcieStandartEnum,
} = require('../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllBuilds = catchAsync(async (req, res, next) => {
  const builds = await Build.findAll({
    include: [{ model: User }, { model: BuildPart, include: Part }],
  });

  if (!builds) return next(new AppError('No builds found'));

  res.status(200).json({
    status: 'success',
    builds,
  });
});

exports.getBuild = catchAsync(async (req, res, next) => {
  const allParts = [
    'memory',
    'cpu',
    'ram',
    'psu',
    'gpu',
    'motherboard',
    'cooler',
  ];
  const { buildId } = req.query;

  const build = await Build.findOne({ where: { id: buildId } });

  if (!build) return next(new AppError("build doesn't exist"));

  const bParts = await BuildPart.findAll({ where: { buildId: buildId } });
  let ids = [];
  // get ids of parts who belong to the build
  for (const bpart of bParts) {
    ids.push(bpart.partId);
  }

  // get parts who belong to the build
  let parts = [];
  for (const anId of ids) {
    parts.push(await Part.findOne({ where: { id: anId } }));
  }

  // get part type who belong in the build
  let hold = [];
  for (const name of parts) {
    hold.push(name.type);
  }

  const left = allParts.filter((item) => !hold.includes(item));
  // const parts = await Part.findAll({ where: { id: bParts.partId } });
  res.status(200).json({
    status: 'success',
    buildId: build.id,
    buildName: build.name,
    left, // parts who still can be added
    parts, // parts who are in the build
  });
});

exports.createBuild = catchAsync(async (req, res, next) => {
  const { name, userId } = req.query;
  if (name === 'undefined') {
    return next(new AppError('You need to put a proper build name'));
  }
  const build = await Build.findOne({ where: { name: name } });

  if (!build) {
    const newBuild = await Build.create({
      name: name,
      userId: userId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    res.status(200).json({
      status: 'success',
      id: newBuild.id,
    });
  } else {
    return next(new AppError('Build name already taken'));
  }
});

exports.removeBuild = catchAsync(async (req, res, next) => {
  const { buildId } = req.query;
  const build = await Build.findOne({ where: { id: buildId } });

  if (!build) return next(new AppError('No build found to destroy'));

  //remove parts from the build
  const bParts = await BuildPart.findAll({ where: { buildId: buildId } });
  if (bParts.length !== 0) {
    for (const bpart of bParts) {
      await bpart.destroy({ force: true });
    }
  }

  //remove the build
  await build.destroy({ force: true });

  res.status(204).json({});
});

exports.AddPartToBuild = catchAsync(async (req, res, next) => {
  const { buildId, partId } = req.query;

  const newBuildPart = await BuildPart.findOne({
    where: { partId: partId, buildId: buildId },
  });

  if (!newBuildPart) {
    const newItem = await BuildPart.create({
      quantity: 1,
      buildId: buildId,
      partId: partId,
    });
    res.status(200).json({
      status: 'success',
      item: newItem,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Part already exists in the build',
    });
  }
});

exports.checkCompatibility = catchAsync(async (req, res, next) => {
  const { buildId } = req.query;
  const build = await Build.findOne({ where: { id: buildId } });

  if (!build) return next(new AppError('No such build was found'));

  // get which parts belong to a specified build
  const Bparts = await BuildPart.findAll({
    where: { buildId: buildId },
    include: Part,
  });

  // get raw part information
  let parts = [];
  for (const bpart of Bparts) {
    parts.push(bpart.Part);
  }

  // begin compatibility check
  // ------------------------------------------------------------------
  const motherboard = await parts.find((item) => item.type === 'motherboard');
  const cpu = await parts.find((item) => item.type === 'cpu');
  const ram = await parts.find((item) => item.type === 'ram');
  const gpu = await parts.find((item) => item.type === 'gpu');
  const memory = await parts.find((item) => item.type === 'memory');

  // MOTHERBOARD ID ALWAYS FIRST in compatible_parts objects
  let problems = [];
  // cpu and motherboard exist
  if (cpu !== undefined && motherboard !== undefined) {
    // does compatible parts object exist
    const cond = await CompatiblePart.findOne({
      where: { part1Id: motherboard.id, part2Id: cpu.id },
    });
    let checker = 1;
    if (!cond) {
      checker = 0;
    }
    const temp1 = await CPU.findOne({ where: { partId: cpu.id } });
    const temp2 = await Motherboard.findOne({
      where: { partId: motherboard.id },
    });

    // both sockets match
    if (checker === 1 || temp1.socketStandart === temp2.cpuSocketStandart) {
      // make a compatible parts object
      if (!cond) {
        const newItem = await CompatiblePart.create({
          compatible: 1,
          part1Id: motherboard.id,
          part2Id: cpu.id,
        });
      }
    } else {
      // sockets don't match
      problems.push("Cpu and motherboard aren't compatible.\n");
    }
  }

  // ram and motherboard exist
  if (ram !== undefined && motherboard !== undefined) {
    // does compatible parts object exist
    const cond = await CompatiblePart.findOne({
      where: { part1Id: motherboard.id, part2Id: ram.id },
    });
    let checker = 1;
    if (!cond) {
      checker = 0;
    }
    const temp1 = await RAM.findOne({ where: { partId: ram.id } });
    const temp2 = await Motherboard.findOne({
      where: { partId: motherboard.id },
    });
    // both ram types match
    if (checker === 1 || temp1.ramTypeEnum === temp2.ramTypeEnum) {
      // make a compatible parts object
      if (!cond) {
        const newItem = await CompatiblePart.create({
          compatible: 1,
          part1Id: motherboard.id,
          part2Id: ram.id,
        });
      }
    } else {
      // sockets don't match
      problems.push("Ram and motherboard aren't compatible.\n");
    }
  }

  // gpu and motherboard exist
  if (gpu !== undefined && motherboard !== undefined) {
    // does compatible parts object exist
    const cond = await CompatiblePart.findOne({
      where: { part1Id: motherboard.id, part2Id: gpu.id },
    });
    let checker = 1;
    if (!cond) {
      checker = 0;
    }
    const temp1 = await GPU.findOne({ where: { partId: gpu.id } });
    const temp1Enum = await PcieStandartEnum.findOne({
      where: { pcieStandart: temp1.pcieStandartEnum },
    });
    const temp2 = await Motherboard.findOne({
      where: { partId: motherboard.id },
    });

    // both gpu types match
    if (checker === 1 || temp1Enum.id === temp2.pcieStandartEnum) {
      // make a compatible parts object
      if (!cond) {
        const newItem = await CompatiblePart.create({
          compatible: 1,
          part1Id: motherboard.id,
          part2Id: gpu.id,
        });
      }
    } else {
      // sockets don't match
      problems.push("Gpu and motherboard aren't compatible.\n");
    }
  }

  // memory and motherboard exist
  if (memory !== undefined && motherboard !== undefined) {
    // does compatible parts object exist
    const cond = await CompatiblePart.findOne({
      where: { part1Id: motherboard.id, part2Id: memory.id },
    });
    let checker = 1;
    if (!cond) {
      checker = 0;
    }
    const temp1 = await ExternalMemory.findOne({
      where: { partId: memory.id },
    });
    const temp2 = await Motherboard.findOne({
      where: { partId: motherboard.id },
    });
    // find memory type and if a socket exists
    let deeperCheck = false;
    if (temp1.connectorType.includes('M.2')) {
      if (temp2.m2ssdSocketQuantity > 0) deeperCheck = true;
    } else if (temp1.connectorType.includes('SATA')) {
      if (temp2.sataSocketQuantity > 0) deeperCheck = true;
    } else if (temp1.connectorType.includes('PCie')) {
      // socket is shared with gpu, so you need at least 2
      // one for gpu and one for this type of memory
      if (temp2.pcieSocketQuantity > 1) deeperCheck = true;
    }

    if (checker === 1 || deeperCheck) {
      // make a compatible parts object
      if (!cond) {
        const newItem = await CompatiblePart.create({
          compatible: 1,
          part1Id: motherboard.id,
          part2Id: memory.id,
        });
      }
    } else {
      // sockets don't match
      problems.push("Memory and motherboard aren't compatible.\n");
    }
  }

  if (problems.length === 0) {
    res.status(200).json({
      status: 'success',
      problems: '',
    });
  } else {
    res.status(201).json({
      status: 'problematic',
      problems: problems,
    });
  }
});
