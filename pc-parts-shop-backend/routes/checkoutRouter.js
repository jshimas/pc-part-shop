const express = require('express');
const checkoutController = require('../controllers/checkoutController');

const router = express.Router();

router.post('/checkout-session', checkoutController.getCheckoutSession);

module.exports = router;
