const express = require('express');
const app = express();
const cors = require("cors");
const productRoutes = require('./modules/productRoutes');
app.use(express.json());
app.use(cors());
app.use(productRoutes);
module.exports = app;