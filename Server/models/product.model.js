const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imageUrl: { type: String, default: 'http://via.placeholder.com/200x200' },
    title: String,
    price: Number,
    description: String,
}, 
{ timestamps: true }
);
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;