const express = require('express')
const router = express.Router();

const { newOrder } = require('../controllers/orderController')

const { isAuthenticateUser , authorizeRoles } = require('../middlewares/auth')

router.route('/order/new').post( isAuthenticateUser, newOrder);

module.exports = router;