var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.all)
router.post('/', userController.create)

module.exports = router;
