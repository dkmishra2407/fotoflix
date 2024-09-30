const express = require("express");
const {v4 : uuid } = require('uuid');
const app = express();

const PRODUCT_DATA = [
    {
        id:uuid(),
        title:"Iphone",
        image:"Image url 1"
    },
    {
        id:uuid(),
        title:"Macbook Book Air",
        image:"Image url 2"
    },
    {
        id:uuid(),
        title:"Apple Watch",
        image:"Image url 3"
    },
    {
        id:uuid(),
        title:"Macbook",
        image:"Image url 4"
    },
]










app.listen(8000,(req,res)=>{
    console.log("SERVER IS STARTED ON PORT 8000");
})