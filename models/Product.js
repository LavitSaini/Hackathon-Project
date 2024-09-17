const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
        default: 0,
    },
    sale: {
        type: Boolean,
    },
    stock: {
        type: Number,
        required: true,
    }
}, { timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
