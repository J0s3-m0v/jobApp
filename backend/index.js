
var mongoose = require('mongoose');
var app = require('./app');
var port =3700;

// here made the connection with the data base

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/jobDB')
.then(()=>{
    console.log("The Database was connected successfully");
    // create server
    app.listen(port,()=>{
        console.log("Server running correctly at the url:localhost:3700");
    });
})
.catch(err =>console.log(err));