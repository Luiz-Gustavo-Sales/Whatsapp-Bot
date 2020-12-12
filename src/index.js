// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");
const fs = require('fs');

//função exportando o QRCOD PARA
function exportQR(qrCode,path){
  qrCode = qrCode.replace('data:image/png;base64,', '');
  const imageBuffer = Buffer.from(qrCode, 'base64');
 

// Cria o arquivo 'qrcode.png'
  fs.writeFileSync(path, imageBuffer);
}
bot
  .create('sessionBodega',(base64Qr, asciiQR)=>{
    //criando png do QRCODE
    exportQR(base64Qr, 'qrcode.png');
  })
  .then((client) => start(client)).catch((erro)=>{console.log("erro")});

function start(client) {

  client.onMessage((message) => {

    // console.log("Verificando aqui variavel message.body: ",message.body);
    // console.log("Verificando aqui variavel message.from: ",message.from);
    //console.log("Verificando aqui variavel message.sender.name: ",message.sender.name)
    if (message.from.split("@")[1] != "g.us") {
      let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.sender.name
      );
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        // console.log("Parte do for: ", element)
        client.sendText(message.from, element);
      }
    } else {
      console.log("Menssagem de grupo ");
    }
  });
}

// exports.start= start;
function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    // console.log("Teste")
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    // console.log("OLha aqui: ",banco.db[user].stage);
    return banco.db[user].stage;
  }
}
