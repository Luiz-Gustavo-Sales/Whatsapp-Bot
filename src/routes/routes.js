//importando o express (rotas)
const express = require("express");
//modulo de rotas do express
const routes = express.Router();
const start = require("../index")
routes.get("/teste",start.start)
module.exports = routes;