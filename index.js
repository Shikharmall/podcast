const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/podcast");

require("dotenv").config();

const port = process.env.PORT || 5174;

var express = require('express');
var app = express();

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

app.listen(port,()=>{
  console.log('Running at port: '+ port);
});