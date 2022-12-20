const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/update', authController.update);
router.post('/logout', authController.logout);
router.delete('/delete', authController.delete);
router.get('/current-user-data', authController.getUserData);
router.get('/getAll', authController.getAll);

module.exports = router;
