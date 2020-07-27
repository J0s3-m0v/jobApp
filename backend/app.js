var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// upload file routes
var job_routes = require('./routes/job');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors

// routs

app.use('/api',job_routes);

// exportar
module.exports = app;