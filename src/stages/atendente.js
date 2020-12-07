const cardapio = require("../opcoes");
const banco = require("../banco");
const time = require("../stages/atendente")

function execute(user, msg) {
  banco.db[user].stage = 0;
  return([
    `Verifiquei que você não finalizou última sessão, mande um OI novamente para prosseguir com o atendimento automático`
  ])

}

exports.execute = execute;
