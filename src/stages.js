var stages = {
  0: {
    descricao: "Boas Vindas - Menu",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Comprar pelo Bodegamix",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Falar com o Cadastro",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Quero me cadastrar",
    obj: require("./stages/2"),
  },
  4: {
    descricao: "Financeiro",
    obj: require("./stages/2"),
  },
  5: {
    descricao: "Contato do Vendedos externo",
    obj: require("./stages/2"),
  },
  6: {
    descricao: "Segunda via boleto Dismelo",
    obj: require("./stages/2"),
  },
  7: {
    descricao: "Segunda via de boleto Distrimix",
    obj: require("./stages/2"),
  },
  8: {
    descricao: "Como realizar login no site Bodegamix",
    obj: require("./stages/2"),
  },
  9: {
    descricao: "Não consigo fazer login no site",
    obj: require("./stages/2"),
  },
  10: {
    descricao: "Falar com atendente ",
    obj: require("./stages/atendente"),
  },
  //  8001:{
  //   descricao:"Menu",
  //   obj:require("./stages/menu")
  // },
  8001:{
    descricao:"Encerra sessão",
    obj:require("./stages/atendente")
  },
  8002:{
    descricao:"Voltar",
    obj:require("./stages/2")
  }

};

exports.step = stages;
