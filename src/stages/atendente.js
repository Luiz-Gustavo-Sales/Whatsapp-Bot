const banco = require("../banco");
const opcoes = require("../opcoes");
const finalizarTime = require("./1");
const tempo = require("./time");
function execute(user, msg) 
{
  
   //finalizando tempo para ter um tempo individual pro atendente


    //  //====================VARIAVEIS PARA O TEMPO=====================
    //  var c = 0;
    //  var t;
    //  var timer_is_on = 0;
    //  var time_atendente=60;
    //  var teste ="";
    //     //====================VARIAVEIS PARA O TEMPO==================
       
    // //contagem do tempo
    // function timedCount() {
  
    //    c = c + 1;
    //    t = setTimeout(timedCount, 1000);
    //    console.log("tempo: ",c);
    //    if(c==time_atendente){
    //      stopCountAtendente();
    //     banco.db[user].stage = 8001;
    //      console.log("Entrou no IF DO TEMPO")
    //    }
    
    //  }
 
    //  //iniciando tempo
    //  function startCountAtendente() {
    //    if (!timer_is_on) {
    //      timer_is_on = 1;
    //      timedCount();
    //    }
    //    console.log("iniciou tempo")
    //  }
    //  //pausando tempo
    //  function stopCountAtendente() {
    //    c=0;
    //    clearTimeout(t);
    //    timer_is_on = 0;
    //    console.log("Pasou o tempo");
    //  }
   
}

exports.execute = execute;

