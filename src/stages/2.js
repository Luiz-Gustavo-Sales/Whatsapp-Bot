const banco = require("../banco");
const opcoes = require("../opcoes");

function execute(user, msg) {

if(msg=="1"){
        let menu = " ======== MENU ======== \n\n";
        Object.keys(opcoes.menu).forEach((value) => {
          let element = opcoes.menu[value];
          menu += `${value} - ${element.descricao}\n`;
        });
        banco.db[user].stage = 1;
        
        return( [
          menu,
        ]
        );
      } 
      if(msg=="2"){
        banco.db[user].stage = 0;
        return(
        ["Sessão encerrada, obrigado pelo contato!! Caso tenha dúvidas mande mensagem novamente"]
        );
      } if(msg!="1" ||msg!="end"){
        banco.db[user].stage = 8002;
        return(
        ['Você digitou opção errada! Digite [1] para poder voltar']
        );
      }
 
        }

exports.execute = execute;

