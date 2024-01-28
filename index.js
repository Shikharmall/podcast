const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/podcast");

require("dotenv").config();

var express = require('express');
var app = express();

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

app.listen(3000);