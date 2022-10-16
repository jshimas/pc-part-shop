const express = require('express');
const buildController = require('../controllers/buildController');

const router = express.Router();

router
  .route('/')
  .get(buildController.getAllBuilds)
  .post(buildController.createBuild);

module.exports = router;
