const Product = require('../models/product.model');    

const createProduct = (request, response) => {
    const { body } = request;
    Product.create(body) 
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
}

const showProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json(allProducts))
        .catch((err) => console.log(err))
}

module.exports = {
    createProduct,
    showProducts,
}