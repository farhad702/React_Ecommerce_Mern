const express = require('express')
const router = express.Router();

const {
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getProductReviews,
    deleteReview
} = require ('../controllers/productController');

const { isAuthenticateUser, authorizeRoles } = require('../middlewares/auth');
router.route('/products').get( getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post( isAuthenticateUser,authorizeRoles('admin'), 
newProduct);

router.route('/admin/product/:id')
.put(isAuthenticateUser, authorizeRoles('admin'), updateProduct)
.delete( isAuthenticateUser, authorizeRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticateUser, createProductReview)
router.route('/reviews').get(isAuthenticateUser, getProductReviews)
router.route('/reviews').delete(isAuthenticateUser, deleteReview)
module.exports = router; 