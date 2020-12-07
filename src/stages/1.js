
const cardapio = require("../opcoes");
const banco = require("../banco");
const time = require("../stages/atendente");

function execute(user, msg) {
  let voltar =
    " \n\n[1] - Voltar\n\n[2] - Finalizar Sessão\n\nDica:\nSe quer *voltar* digite *1* para voltar para o *menu* anterior\n\n____________________________";

  let tempo = "";
  function myFunc(arg) {
    tempo = arg;
    console.log("na função: " + arg);
    console.log(`arg was => ${arg}`);
    banco.db[user].stage = 8001;
 if(tempo=="8001"){
var objeto =require("./atendente");
 
   console.log("Caiu aqui")
   return objeto;
  }
  

  }
  setTimeout(myFunc, 1500, "8001");

  switch (msg) {
    //opção 1 chamando arquivo 2.js
    case "1":
      banco.db[user].stage = 2;
      return [
        `Opção - 1: Segue link para fazer o login: https://www.bodegamix.com.br/login\n\n Para entrar basta colocar as seguintes informações:
      Login: somente os números do CNPJ 
      exemplo: 12345678000910
      Senha: asd123asd \n\n O carrinho suporta até 45 itens por pedido, caso ultrapasse o site vai travar. \n\nVerificar os produtos adicionados no carrinho se é da DISMELO ou DISTRIMIX.${voltar}`,
      ];
    case "2":
      banco.db[user].stage = 3;
      return [
        `Opção - 2: Responsável pelo cadastro Maraísa contato 91-99164-8755. \n\n${voltar}`,
      ];
    case "3":
      banco.db[user].stage = 3;
      return [
        `Opção - 3: Segue link para cadastro https://cadastro.wmempresas.com.br/bodegamix.\n\n${voltar}`,
      ];
    case "4":
      banco.db[user].stage = 3;
      return [
        `Opção - 4: Falar com responsável kildery, contato 91-99124-5620.\n\n${voltar}`,
      ];
    case "5":
      banco.db[user].stage = 3;
      return [
        `Opção - 5: Solicitar contato do vendedor externo para recepção, contato 91-3311-3800 ou 91-99178-7924.\n\n${voltar}`,
      ];
    case "6":
      banco.db[user].stage = 3;
      return [
        `Opção - 6: Link- https://boleto.wmempresas.com.br/dismelo/\n\nPor favor informe o seu CNPJ para ser gerado a senha\n\n${voltar}`,
      ];
    case "7":
      banco.db[user].stage = 3;
      return [
        `Opção - 7: Link- https://boleto.wmempresas.com.br/distrimix/\n\nPor favor informe o seu CNPJ para ser gerado a senha\n\n${voltar}`,
      ];
    case "8":
      banco.db[user].stage = 3;
      return [
        `Opção - 8: Para fazer o login no bodegamix:\n\n1º: inserir o seu cnpj somente os numeros, exemplo: 12345678000910\n\n2º: Sua senha é : asd123asd\n\n3º: O carrinho suporta até 200 itens por pedido, caso ultrapasse o site vai travar.\n\n4º: Verificar os produtos adicionados no carrinho se é da DISMELO ou DISTRIMIX.\n\n${voltar}`,
      ];
    case "9":
      banco.db[user].stage = 3;
      return [
        `Opção - 9: Já possui cadastro no bodegamix,  Dismelo ou Distrimix?\n\nSe já possui me informe o seu cnpj por favor.\n\nSe ainda nao possui cadastro, segue link para se cadastrar https://cadastro.wmempresas.com.br/bodegamix.\n\n${voltar}`,
      ];
    case "10":
      banco.db[user].stage = 10;
      return ["Opção - 10: Olá, me chamo alexssandro em que posso ajudar?"];
    //VERIFICAR PARA VOLTAR PARA O MENU NOVAMENTE
    default:
      banco.db[user].stage = 1;
      return ([
        `Você digitou opção invalida, digite as opções listada no Menu anterior.`,
      ]
      );
  }
  
}

exports.execute = execute;
