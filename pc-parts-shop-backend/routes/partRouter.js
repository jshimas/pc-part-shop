const express = require('express');
const partdController = require('../controllers/partController');

const router = express.Router();

router
  .route('/')
  .get(partdController.getParts)
  //.post(partdController.createPart)
  //.delete(partdController.deletePart)
  .patch(partdController.editPart);

router.delete('/delete-part', partdController.deletePart);

router.post('/create-part', partdController.createPart);

router.get('/get-part', partdController.getOnePart);

module.exports = router;
