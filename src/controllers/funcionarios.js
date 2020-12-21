const sessions = require("../models/schema");

module.exports = {
  async register(req, res) {
    try {
      const dadossessions = req.body;

      console.log("OLha aqui: ", dadossessions);

      const sessionsFuncionario = await sessions.create({
        user: dadossessions.user,
        password: dadossessions.password,
      });

      return res.json(sessionsFuncionario);
    } catch (error) {
      console.log("Erro: ", error);
    }
  },
  async login(req, res) {
    const dadoslogin = req.body;
    console.log("Dados do login", dadoslogin);
    try {
      const loginfuncionario = await sessions.findOne({
        user: dadoslogin.user,
      });
      console.log("FIltro: ", loginfuncionario);
      if (
        dadoslogin.user == loginfuncionario.user &&
        dadoslogin.password == loginfuncionario.password
      ) {
        console.log("Usário Logado");
      } else {
        console.log("Usário não confere");
      }
      return res.json(loginfuncionario);
    } catch (error) {
      console.log("Erro login", error);
    }
  },
};
