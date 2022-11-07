const { ShoppingCart, OrderItem, Part } = require('../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getUserCart = catchAsync(async (req, res) => {
  const { userId } = req.query;

  let cart = await ShoppingCart.findOne({ where: { userId } });

  let cartItems;
  if (!cart) {
    cart = await ShoppingCart.create({ userId: userId });
  } else {
    cartItems = await OrderItem.findAll({
      where: { cartId: cart.id },
      include: Part,
    });
  }

  res.status(200).json({
    cartId: cart.id,
    items: cartItems,
  });
});

exports.addCartItem = catchAsync(async (req, res) => {
  const { cartId, partId } = req.query;

  let newItem;
  const existingItem = await OrderItem.findOne({ where: { partId } });
  if (!existingItem) {
    newItem = await OrderItem.create({ cartId, partId });
  } else {
    await existingItem.increment('quantity');
    newItem = await OrderItem.findOne({ where: { partId } });
  }

  const cartItem = await OrderItem.findOne({
    where: { id: newItem.id },
    include: Part,
  });

  res.status(201).json({
    item: cartItem,
  });
});

exports.changeCartItemQuantity = catchAsync(async (req, res, next) => {
  const { itemId, action } = req.query;

  const cartItem = await OrderItem.findOne({ where: { id: itemId } });

  if (action === 'add') await cartItem.increment('quantity');
  else if (action === 'remove') await cartItem.decrement('quantity');
  else return next(new AppError('Can not resolve this action'));

  await cartItem.reload();

  res.status(200).json({
    item: cartItem,
  });
});

exports.deleteCartItem = catchAsync(async (req, res, next) => {
  const { itemId } = req.query;

  const cartItem = await OrderItem.findOne({ where: { id: itemId } });

  if (!cartItem) return next(new AppError('No cart item to destroy'));

  await cartItem.destroy({ force: true });

  res.status(204).json({});
});
