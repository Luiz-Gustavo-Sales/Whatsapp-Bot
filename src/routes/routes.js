// IMPORTANDO EXPRESS
const express = require("express");
const startt = require("../index")
const routes = express.Router();

routes.get("/start",startt.start);
module.exports = routes;