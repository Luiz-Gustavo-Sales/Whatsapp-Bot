//importando o express (rotas)
const express = require("express");
const path = require("path")
const indexStart = require("../../index")
const teste = require("../teste")
//modulo de rotas do express
const routes = express.Router();
routes.get("/start",indexStart.teste)
routes.get("/teste",teste.initSession);
// routes.get("/",(req,res)=>res.sendFile(path.join(__dirname+"/index.html")))
// routes.get("/start",start)
module.exports = routes;