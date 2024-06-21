const express = require('express');
const router = express.Router();
const {addProduct, getProducts} = require('../controllers/productController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
router.route('/').post(upload.single('image'), addProduct).get(getProducts);
module.exports = router;