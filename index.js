const express = require("express");
const path = require("path");
const app = express();
const port = 5000;


app.set('view engine', 'ejs');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));


app.use(function(req, res, next){
    req.name = "Krishna"
    console.log("middleware is called")
    next()
})

app.get('/', (req , res) =>{
    return res.render('todo',{
        title : "Love you bro!"
    })
})

app.listen(port, (err) =>{
    if(err){
        console.log('Error' , err);
    }
    console.log(`Server is running well on port ${port} ****`)
})