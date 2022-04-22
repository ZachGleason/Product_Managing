const ProductController = require('../controllers/product.controller');  

module.exports = (app) => {
    app.post('/product', ProductController.createProduct);
    app.get('/allproducts', ProductController.showProducts);
    app.delete('/delete/:id', ProductController.deleteProduct);
}