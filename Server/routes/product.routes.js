const ProductController = require('../controllers/product.controller');  

module.exports = (app) => {
    app.post('/product', ProductController.createProduct);
    app.get('/allproducts', ProductController.showProducts);
    app.delete('/delete/:id', ProductController.deleteProduct);
    app.get('/product/:id', ProductController.getOneProduct);
    app.put('/product/:id', ProductController.updateProduct);
}