import "./App.css";

function App() {
  return (
    <form>
      <img className="logo" src="https://www.bodegamix.com.br/Themes/Emporium/Content/img/logo.png" />
      <div className="form_register-principal">
        <div className="form_register">
          <div className="TextFild">
            <label className="label_input">Username</label>
            <input
              className="input_register"
              placeholder="Digite seu user"
              type="text"
            />
          </div>
          <div className="TextFild">
            <label className="label_input">Senha</label>
            <input
              className="input_register"
              placeholder="Digite sua senha"
              type="password"
            />
          </div>
          <div className="TextFild">
            <label className="label_input">E-mail</label>
            <input
              className="input_register"
              placeholder="DIgite seu email"
              type="email"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
