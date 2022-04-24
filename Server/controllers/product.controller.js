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

const deleteProduct = ( req, res) => {
    Product.deleteOne({ _id: req.params.id})
    .then((deletedProduct) => {
        res.json(deleteProduct)
    })
    .catch(err => res.json(err));
}

const getOneProduct = (req, res) => {
    Product.findOne({ _id:req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => console.log(err))
}


module.exports = {  
    createProduct,
    showProducts,
    deleteProduct,
    getOneProduct,
}