require('dotenv').config();

const express = require('express');
const router = express.Router();
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/reviews', require('./reviews'));
router.use('/categories', require('./categories'));
router.use('/messages', require('./messages'));
router.use('/billings', require('./billings'));
router.use('/shipping', require('./shipping'));
router.use('/payments', require('./payments'));
router.use('/addtocart', require('./addtocart'));
router.use('/addtowishlist', require('./addtowishlist'));


module.exports = router;
