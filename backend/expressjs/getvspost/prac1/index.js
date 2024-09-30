const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json({ limit: '10mb'}));

app.get('/users',(req,res)=>{
    console.log(req.query);
    res.send("You make Request for Post");
});


app.listen(3000,()=>{
    console.log("server Running");
});