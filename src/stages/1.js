
const cardapio = require("../opcoes");
const banco = require("../banco");
const time = require("./finalizarSessao");

function execute(user, msg) {
  let voltar =" \n\n[1] - Voltar\n\n[2] - Finalizar Sessão\n\nDica:\n⚠️Caso queira *voltar* digite *[1]* para voltar para o *menu* anterior e *[2]* para *finalizar sessão⚠️*\n\n________________________________";
  let obs= " \n\n*Você tem 5 minutos para escolher uma das opções, caso não responda sua sessão irá finalizar.*"  
  
  //====================VARIAVEIS PARA O TEMPO=====================
    var c = 0;
    var t;
    var timer_is_on = 0;
       //====================VARIAVEIS PARA O TEMPO==================


    //contagem do tempo
    function timedCount() {
     // document.getElementById("txt").value = c;
      c = c + 1;
      t = setTimeout(timedCount, 1000);
      console.log("tempo: ",c);
      if(c==300){
        stopCount();
       banco.db[user].stage = 8001;
        console.log("Entrou no IF DO TEMPO - TEMPO FINALIZADO")
      }
    }

    //iniciando tempo
    function startCount() {
      if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
      }
      console.log("iniciou tempo")
    }
    //pausando tempo
    function stopCount() {
      c=0;
      clearTimeout(t);
      timer_is_on = 0;
      console.log("Pasou o tempo");
    }
   

  startCount();
 
  exports.stopCount = stopCount; 

  switch (msg) {
    //opção 1 chamando arquivo 2.js
    case "1":
     
      banco.db[user].stage = 2;
    
      return [
        `_Opção - 1:_ Segue o link para fazer o login no site:https://www.bodegamix.com.br/login ou baixe nosso aplicativo: https://linktr.ee/bodegamix.\n\n ➡️Para entrar basta colocar as seguintes informações:
        ▶️Login: somente os números do CNPJ  Exemplo: 13503722000100
        ▶️Senha: asd123asd \n\n ➡️O carrinho suporta até 50 itens por pedido, caso ultrapasse o site vai travar. Caso seu pedido seja mais que 100 produtos passe o pedido por partes. \n\n➡️Verificar os produtos adicionados no carrinho antes de finalizar o pedido.${voltar} ${obs}`,
      ];
    case "2":
      banco.db[user].stage = 3;
      return [
        `_Opção - 2:_ ➡️Responsável pelo cadastro contato 91-99164-8755. \n\n${voltar} ${obs}`,
      ];
    case "3":
      banco.db[user].stage = 3;
      return [
        `_Opção - 3:_ ➡️Caso possua CNPJ, você poderá fazer seu cadastro clicando no link: https://cadastro.wmempresas.com.br/bodegamix .\n\n${voltar} ${obs}`,
      ];
    case "4":
      banco.db[user].stage = 3;
      return [
        `_Opção - 4:_ ➡️Falar com responsável Kildery, contato 91-99124-5620.\n\n${voltar} ${obs}`,
      ];
    case "5":
      banco.db[user].stage = 3;
      return [
        `_Opção - 5:_ ➡️Solicitar contato do vendedor externo para recepção, contato *91-3311-3800 ou 91-99178-7924*.\n\n${voltar} ${obs}`,
      ];
    case "6":
      //tratar aqui mandar pra outra rota
      banco.db[user].stage = 3;
      return [
        `_Opção - 6:_ ➡️Acesse o Link para poder tirar sua segunda via de boleto- https://boleto.wmempresas.com.br/dismelo/\n\n➡️Caso não saiba sua *senha* volte para o *Menu* inicial e digite a *opção 9* para poder falar com o atendente e solicite a senha para retirar sua segunda via.\n\n${voltar} ${obs}`,
      ];
    case "7":
      //TRATAR AQUI mandar para outra rota
      banco.db[user].stage = 3;
      return [
        `_Opção - 7:_ ➡️Acesse o Link para poder tirar sua segunda via de boleto- https://boleto.wmempresas.com.br/distrimix/\n\n➡️Caso não saiba sua senha volte para o Menu inicial e digite a *opção 9* para poder falar com o atendente e solicite a senha para retirar sua segunda via\n\n${voltar} ${obs}`,
      ];
    case "8":
      banco.db[user].stage = 3;
      return [
        `_Opção - 8:_ ➡️Para fazer o login no Bodegamix siga o passo a passo:\n\n1º: inserir o seu CNPJ somente os numeros, exemplo: 13503722000100\n\n2º: Sua senha é : asd123asd\n\n3º: O carrinho suporta até 50 itens por pedido, caso ultrapasse o site vai travar.\n\n4º: Verificar os produtos adicionados no carrinho antes de finalizar.\n\n${voltar} ${obs}`,
      ];
    // case "9":
    //   banco.db[user].stage = 3;
    //   return [
    //     `_Opção - 9:_ Já possui cadastro no Bodegamix,  Dismelo ou Distrimix?\n\nSe ainda nao possui cadastro, segue link para se cadastrar https://cadastro.wmempresas.com.br/bodegamix.\n\n${voltar} ${obs}`,
    //   ];
    case "9":
      // stopCount();
      // banco.db[user].stage = 10;
      banco.db[user].stage = 3;
      return [`_Opção - 9:_ ➡️Olá, para falar com um dos nossos atendente basta clicar no link que você será direcionado para o WhatApp do atendente.\n\nLink para se direcionar: https://wa.me/message/GJRWT3IF527YM1.\n\nNúmero para contato: (91) 99186-1158 \n\n${voltar} ${obs}`];
    //VERIFICAR PARA VOLTAR PARA O MENU NOVAMENTE
    default:
     stopCount(); 
      banco.db[user].stage = 1;
      return ([
        `❌Você digitou opção invalida, digite as opções listada no Menu anterior❌`,
      ]
      );
  }
  
}

exports.execute = execute;

/*
  // let tempo = "";
//   function myFunc(arg) {
//     tempo = arg;
//     console.log("na função: " + arg);
//     console.log(`arg was => ${arg}`);
//     banco.db[user].stage = 8001;
//  if(tempo=="8001"){

 
//    console.log("Caiu aqui")
//    return objeto;
//   }
  

//   }
//   setTimeout(myFunc, 3500, "8001");

*/