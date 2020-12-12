const https = require('https');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/routes");
const cors = require("cors");

const api = express();

const PORT= process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';
// mongoose.connect(
//   "mongodb+srv://bodegamix:bodegamix2020@cluster0-xsmns.mongodb.net/BDVENDAS?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }
// );

api.use(cors());
api.use(express.static('static'));
api.use(express.json());
api.use(routes);


  api.listen(PORT, HOST,() => {
    console.log("Http server running on port " + 'http://' + HOST + ':' + PORT);
  });
  module.exports = api;