const opcoes = require("../informacao");
const banco = require("../banco");

function execute(user, msg) {

let menu_escolhido="";
let menu = " ======== MENU ======== \n\n";
/*

    
  });
  banco.db[user].stage = 1;
  
  return [
    `Olá sou um assistente virtual, irei apresentar as opções: `,
    menu,
  ];
  */
 //============== ==========================
 Object.keys(opcoes.menu).forEach((value) => {
  let element = opcoes.menu[value];
 menu += `${value}- ${element.descricao}\n`;

 for(var i=0; i<value;i++){
  console.log(i)
  
  }



// for(i=0; i<value;i++){
  
// if(value==msg){
//   menu_escolhido=menu;
//   console.log("Elemento aqui igual a mensagem: "+ menu)
  
// }else{
//   console.log("nao é igual a mensaem: ", menu)
// }
// }

//  console.log(`Elemento aqui: + ${value}`)
})//fim do forcht



return(
  [
    menu_escolhido
  ]
)

}







  // switch(msg){
  //   //opção 1 chamando arquivo 2.js
  //   case '1':
  //   banco.db[user].stage = 2;
  //   return(
  //     [
  //       menu
  //     ]
  //   )
  //   case '2':
  //     banco.db[user].stage = 3;
  //   break;
    // case '3':
    //   banco.db[user].stage = 3;
  
    //   case '4':
    //     banco.db[user].stage = 3;
  
    //     case '5':
    //       banco.db[user].stage = 3;
      
    //       case '6':
    //         banco.db[user].stage = 3;
          

    //       case '7':
    //         banco.db[user].stage = 3;
       
    //       case '8':
    //         banco.db[user].stage = 3;
         
    //       case '9':
    //         banco.db[user].stage = 3;
      
    //       case '10':
    //         // banco.db[user].stage = 3;
          
          //VERIFICAR PARA VOLTAR PARA O MENU NOVAMENTE
  //       default:
  //       banco.db[user].stage = 1;
  //       return(
  //         [`Você digitou opção invalida, digite as opções lista no Menu acima.`]
  //       )
  // }


exports.execute = execute;
