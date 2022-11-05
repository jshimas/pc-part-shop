const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const catchAsync = require('../utils/catchAsync');

const createLineItems = (items) =>
  items.map((item) =>
    Object.create({
      price_data: {
        currency: 'usd',
        unit_amount: item.price,
        product_data: {
          name: `${item.name}`,
        },
      },
      quantity: item.quantity,
    })
  );

exports.getCheckoutSession = catchAsync(async (res, req) => {
  const { cartId, cartItems } = req.body;
  const lineItems = createLineItems(cartItems);

  const session = await stripe.checkout.sessions.create({
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/cart`,
    client_reference_id: cartId,
    line_items: lineItems,
    mode: 'payment',
  });

  res.status(200).json({
    status: 'success',
    session,
  });
});
