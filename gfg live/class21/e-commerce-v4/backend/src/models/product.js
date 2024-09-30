const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}, { versionKey: false, timestamps: true });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;