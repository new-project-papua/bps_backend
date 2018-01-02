var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.all)
router.get('/:_id', userController.byId)
router.post('/', userController.create)
router.post('/login', userController.login)
router.put('/changepassword/:_id', userController.changePassword)

module.exports = router;
