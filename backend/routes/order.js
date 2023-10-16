const express = require('express')
const router = express.Router();

const { newOrder, getSingleOrder, myOrders, allOrders } = require('../controllers/orderController')

const { isAuthenticateUser , authorizeRoles } = require('../middlewares/auth')

router.route('/order/new').post( isAuthenticateUser, newOrder);

router.route('/order/:id').get(isAuthenticateUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticateUser, myOrders);
router.route('/admin/orders').get(isAuthenticateUser, authorizeRoles('admin'), allOrders);
module.exports = router;