const express = require('express')
const router = express.Router();

const {getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct} = require ('../controllers/productController');

const { isAuthenticateUser } = require('../middlewares/auth');
router.route('/products').get( getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/product/new').post( isAuthenticateUser,newProduct);

router.route('/admin/product/:id').put(isAuthenticateUser, updateProduct).delete( isAuthenticateUser, deleteProduct);
module.exports = router;