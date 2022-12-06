const express = require('express');
const buildController = require('../controllers/buildController');

const router = express.Router();

router.get('/getAllBuilds', buildController.getAllBuilds);
router.get('/getBuild', buildController.getBuild);
router.post('/create', buildController.createBuild);

module.exports = router;
