const { Build, BuildPart, Part } = require('../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllBuilds = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

function filtering(parts, removables)
{
  let idxs = [];
  for(let removable of removables)
  {
    for (let i = 0; i < parts.length; i++)
    {
      if (removable === parts[i]) {
        idxs.push(i);
        break;
      }
    }
  }
  for (let idx of idxs)
  {
    parts.splice(idx, 1);
  }
  return parts;
}

exports.getBuild = catchAsync(async (req, res, next) => {
  let allParts = ["memory", "cpu", "ram", "psu", "gpu", "motherboard", "cooler"];
  const { buildId } = req.query;

  const build = await Build.findOne({ where: { id: buildId } });

  if (!build) return next(new AppError('build doesn\'t exist'));

  const bParts = await BuildPart.findAll({ where: { buildId: buildId } });
  let ids = [];
  // get ids of parts who belong to the build
  for (const bpart of bParts)
  {
    ids.push(bpart.partId);
  }

  let parts = [];
  for (const anId of ids)
  {
    parts.push(await Part.findOne({ where: { id: anId } }));
  }

  let hold = []
  for (const name of parts)
  {
    hold.push(name.type);
  }
  let left = filtering(allParts, hold);

  // const parts = await Part.findAll({ where: { id: bParts.partId } });
  res.status(200).json({
    buildId: build.id,
    buildName: build.name,
    left,
    parts,
  });
});

exports.createBuild = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
