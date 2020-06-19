const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/allnews',{useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

//check connection
db.once('open', function(){
    console.log('connected to MongoDB')
});


//check for db error
db.on('error', function(err){
    console.log(err);
});

//init app
const app = express();

///load view engine
// app.set('views',path.join(__dirname, 'views'));
// app.set('view engine', 'pug'); ///replace 'pug' with view engine we used yan

//body parse middleware 
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Set public folder for bootstrap
// app.use(express.static(path.join(__dirname, 'public'))); ///replace 'public' with folder name UI 

///ROUTE


//start server
app.listen(3000,function(){
    console.log("Server started on port 3000...")
});