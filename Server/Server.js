const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors())          
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
const allMyProductRoutes = require('./routes/product.routes')
allMyProductRoutes(app);

app.listen(5000, () => {
    console.log("Listening at Port 5000")
})