//importando o express (rotas)
const express = require("express");
const path = require("path");
const indexStart = require("../../index");
const funcionarios = require("../controllers/funcionarios");
const funcionariosRegister = require("../controllers/funcionarios");
// const teste = require("../page/")

//modulo de rotas do express
const routes = express.Router();

routes.get("/", (req, res) => {
  res.redirect("/login");
});

routes.get("/start/:session", indexStart.startSession);
// routes.get("/teste",teste.initSession);
routes.get("/login", (req, res) =>
  res.sendFile("login.html", { root: "./src/page/" })
);
routes.get("/register", (req, res) =>
  res.sendFile("register.html", { root: "./src/page/" })
);
routes.post("/register", funcionariosRegister.register);
routes.post("/login", funcionariosRegister.login);
// routes.get("/start",start)
module.exports = routes;
