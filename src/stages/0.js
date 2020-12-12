const opcoes = require("../opcoes");
const banco = require("../banco");
function execute(user, msg, contato) {

  let menu = " ======== MENU ======== \n\n";

  Object.keys(opcoes.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `${value} - ${element.descricao}\n`;
  });
  banco.db[user].stage = 1;
  
  return [
    `Olá me chamo B-19 *assistente virtual do Bodegamix*, irei apresentar as opções: `,
    menu,
  ];
}

exports.execute = execute;
