const mongoose = require('mongoose');


// Add more attributes like brand, rating average, created_at etc.
const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    totalPrice: {
        type: Number,
    },
    currPrice: {
        type: Number,
    },
    disscount: {
        type: Number,
    },
    image: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
})

module.exports = mongoose.model('Product', productSchema);