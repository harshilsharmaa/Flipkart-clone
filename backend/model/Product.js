const mongoose = require('mongoose');

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
    },
    brand:{
        type: String
    },
    rating: {
        type: Number,
    },
    ratingCount: {
        type: Number,
    },
    ratingAverage: {
        type: Number,
    },
    createdAt: {
        type: Date,
    }
})

module.exports = mongoose.model('Product', productSchema);