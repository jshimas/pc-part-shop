const Stripe = require('stripe');
const catchAsync = require('../utils/catchAsync');
const { OrderItem, Order, Part } = require('../models');

const createLineItems = (items) =>
  items.map((item) => ({
    price_data: {
      currency: 'eur',
      unit_amount: item.price * 100,
      product_data: {
        name: `${item.name}`,
      },
    },
    quantity: item.quantity,
  }));

exports.getCheckoutSession = catchAsync(async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const { cartId, items, user } = req.body;
  const lineItems = createLineItems(items);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: user.email,
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cart`,
    client_reference_id: cartId,
    line_items: lineItems,
    mode: 'payment',
  });

  res.status(200).json({
    session,
  });
});

exports.createOrder = catchAsync(async (req, res) => {
  const { cartId, userId } = req.query;

  const items = await OrderItem.findAll({ where: { cartId }, include: Part });
  console.log(items);
  // Create Order
  const order = await Order.create({
    userId: userId,
    paymentDate: String(new Date()),
    totalPrice: items.reduce(
      (acc, item) => acc + item.quantity * item.Part.price,
      0
    ),
  });

  console.log('order: ', order);

  // Remove items from the shopping cart and add to Order
  items.forEach(
    async (item) => await item.update({ cartId: null, orderId: order.id })
  );

  res.status(201).json({ order });
});
