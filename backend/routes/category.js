const express = require('express');
const router = express.Router();

const {
    addCategory,
    getCategories
} = require('../controller/category');

router.route('/add').post(addCategory);

// Make other routes


module.exports = router;