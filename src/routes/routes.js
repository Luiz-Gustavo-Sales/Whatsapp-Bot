//importando o express (rotas)
const express = require("express");
const path = require("path")
const start = require("../../index")

//modulo de rotas do express
const routes = express.Router();

routes.get("/",(req,res)=>res.sendFile(path.join(__dirname+"/index.html")))
// routes.get("/start",start)
module.exports = routes;