const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

module.exports = mongoose.model('Brand', brandSchema);