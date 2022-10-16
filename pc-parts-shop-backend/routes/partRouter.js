const express = require('express');
const partdController = require('../controllers/partController');

const router = express.Router();

router
  .route('/')
  .get(partdController.getAllParts)
  .post(partdController.createPart);

module.exports = router;
