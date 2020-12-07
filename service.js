const express = require("express");
const port= process.env.PORT || 3000
// IMPORTANDO ROUTES (rotas  da aplicação)
const routes = require("./src/routes/routes");

// CRIANDO UMA APLICAÇÃO EXPRESS
const app = express();

// USANDO EM FORMA DE FUNÇÃO MIDDLWARE AS ROTAS IMPORTADAS
app.use(routes);

//INICIANDO O SERVIDOR NA PORTA SETADA EM app.set('port', '8080')
//app.set('port', '8080')
app.listen(port,function(){
    console.log(`APP RODANDO NA PORTA ${port}`)
});