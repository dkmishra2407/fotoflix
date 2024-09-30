const express = require('express');
const app = express();
const cors = require('cors');

// Routes 
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
// Middlewars
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PATCH',"DELETE"]
}));

// APIs
app.use(productRoutes);
app.use(userRoutes);


//custom error handler.
app.use((err, req, res, next) => {
    const { status=500, message="Internal server error" } = err;
    res.status(status).json({errorMsg: message});
});


app.listen(3000,(req,res)=>{
    console.log("startted");
})

module.exports = app;