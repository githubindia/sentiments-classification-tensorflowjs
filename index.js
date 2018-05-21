var express = require('express');
// var fs = require('fs');
// var morgan = require('morgan');
// var bodyParser = require('body-parser');
var app = express();
// var route = require('./api/routes')

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(express.static('public'));
/**
 * To support JSON-encoded bodies.
 */
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.get('/', function (req,res){
//     res.sendFile(__dirname + '/index.html');
// })

// app.get('/mode', function (req,res){
//     res.sendFile(__dirname + '/model.json');
// })

// app.get('/dict.json', function (req,res) {
//     res.sendFile(__dirname + '/dict.csv');
// })

app.listen(port);
console.log("Server Running Successfully at port " + port);