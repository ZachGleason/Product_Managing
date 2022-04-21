const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors())                

require('./config/mongoose.config');
const allMyProductRoutes = require('./routes/product.routes')
allMyProductRoutes(app);

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})