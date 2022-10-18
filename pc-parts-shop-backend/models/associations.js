const User = require('./userModel');
const Part = require('./partModel');
const Order = require('./orderModel');
const DeliveryAddress = require('./deliveryAddressModel');
const Build = require('./buildModel');
const OrderItem = require('./orderItemModel');
const CompatiblePart = require('./compatiblePartModel');
const ShoppingCart = require('./shoppingCartModel');
const GPU = require('./gpuModel');
const PSU = require('./psuModel');
const ExtrnalMemory = require('./externalMemoryModel');
const CPU = require('./cpuModel');
const RAM = require('./ramModel');
const Cooler = require('./coolerModel');
const MotherBoard = require('./motherBoardModel');

User.hasMany(Order);
User.hasMany(DeliveryAddress);
User.hasMany(Build);

DeliveryAddress.belongsTo(User);
DeliveryAddress.hasMany(Order);

Order.belongsTo(User);
Order.belongsTo(DeliveryAddress);
Order.hasMany(OrderItem);

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Part);

ShoppingCart.hasMany(OrderItem);
ShoppingCart.belongsTo(User);

Build.hasMany(Part);
Build.belongsTo(User);

CompatiblePart.belongsTo(Part, { as: 'part1' });
CompatiblePart.belongsTo(Part, { as: 'part2' });

Part.hasMany(OrderItem);
Part.hasMany(Part);
Part.hasMany(CompatiblePart);

// Polymorphic associations
GPU.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'GPU',
  },
});

Part.belongsTo(GPU, { foreignKey: 'derivedPartId', constraints: false });
// -----------------------
PSU.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'PSU',
  },
});

Part.belongsTo(PSU, { foreignKey: 'derivedPartId', constraints: false });
// -----------------------
ExtrnalMemory.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'ExtrnalMemory',
  },
});

Part.belongsTo(ExtrnalMemory, {
  foreignKey: 'derivedPartId',
  constraints: false,
});
// -----------------------
CPU.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'CPU',
  },
});

Part.belongsTo(CPU, { foreignKey: 'derivedPartId', constraints: false });
// -----------------------
RAM.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'RAM',
  },
});

Part.belongsTo(RAM, { foreignKey: 'derivedPartId', constraints: false });
// -----------------------
Cooler.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'Cooler',
  },
});

Part.belongsTo(Cooler, { foreignKey: 'derivedPartId', constraints: false });
// -----------------------
MotherBoard.hasMany(Part, {
  foreignKey: 'derivedPartId',
  constraints: false,
  scope: {
    derivedPartType: 'MotherBoard',
  },
});

Part.belongsTo(MotherBoard, {
  foreignKey: 'derivedPartId',
  constraints: false,
});
// -----------------------
