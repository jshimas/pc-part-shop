const express = require('express');
const buildController = require('../controllers/buildController');

const router = express.Router();

router.get('/getAllBuilds', buildController.getAllBuilds);
router.get('/getBuild', buildController.getBuild);
router.post('/create', buildController.createBuild);
router.delete('/remove', buildController.removeBuild);
router.delete('/removePart', buildController.removeBuildPart);
router.post('/add', buildController.AddPartToBuild);
router.get('/check', buildController.checkCompatibility);

module.exports = router;
