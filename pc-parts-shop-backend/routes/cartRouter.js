const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router
  .route('/')
  .get(cartController.getUserCart)
  .post(cartController.addCartItem)
  .patch(cartController.changeCartItemQuantity)
  .delete(cartController.deleteCartItem);

module.exports = router;
