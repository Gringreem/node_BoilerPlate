const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const mongodb = mongoose.connection;

mongoose.connect("mongodb://localhost/gringreem");

app.get('/',function(req, res){res.send('Hello,world!')})

app.listen(port, function(){console.log('123')})
