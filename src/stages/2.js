const banco = require("../banco");
const opcoes = require("../opcoes");
const finalizarTime = require("./1");
function execute(user, msg) {

  //caso digite a opção 1 para voltar vai mostrar o menu novamente
if(msg=="1"){
        let menu = " ======== MENU ======== \n\n";
        Object.keys(opcoes.menu).forEach((value) => {
          let element = opcoes.menu[value];
          menu += `${value} - ${element.descricao}\n`;
        });
        //chamando função finalizar o tempo
        finalizarTime.stopCount();
        banco.db[user].stage = 1;
        
        return( [
          menu,
        ]
        );
      } 
      if(msg=="2"){
        //chamando função finalizar o tempo
        finalizarTime.stopCount();
        banco.db[user].stage = 0;
        return(
        ["Sessão encerrada, obrigado pelo contato!! Caso tenha dúvidas mande mensagem novamente"]
        );
      } 
      //Caso não seja nenhuma das opções
      if(msg!="1" ||msg!="2"){
        banco.db[user].stage = 8002;
        return(
        ['Você digitou opção errada! Digite [1] para poder voltar ou digite [2] para finalizar sua sessão']
        );
      }
 
        }

exports.execute = execute;

