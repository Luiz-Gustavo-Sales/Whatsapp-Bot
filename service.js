
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/routes");
const cors = require("cors");
const port = process.env.PORT || 3002;
//
const api = express();

mongoose.connect(
  "mongodb+srv://bodegamix:bodegamix2020@cluster0-xsmns.mongodb.net/BDVENDAS?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }
);

api.use(cors());


api.use(express.json());
api.use(routes);

api.listen(port);
