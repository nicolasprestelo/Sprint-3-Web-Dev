import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/login.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const timers = useRef([]);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    document.title = "Login | Hello World Corporation";

    return () => {
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  function definirMensagem(texto, tipo) {
    setMensagem(texto);
    setTipoMensagem(tipo);
  }

  function agendar(callback, atraso) {
    const timer = window.setTimeout(callback, atraso);
    timers.current.push(timer);
  }

  function lidarComLogin(event) {
    event.preventDefault();

    const destinoAposLogin = location.state?.from?.pathname || "/dashboard";
    const usuarioNormalizado = usuario.trim();

    if (!usuarioNormalizado || !senha) {
      definirMensagem("Preencha usuário e senha.", "error");
      return;
    }

    setEnviando(true);
    setMensagem("");
    setTipoMensagem("");

    agendar(() => {
      const usuarioEncontrado = login(usuarioNormalizado, senha);

      if (!usuarioEncontrado) {
        definirMensagem("Usuário ou senha incorretos.", "error");
        setEnviando(false);
        return;
      }

      definirMensagem("Login realizado com sucesso!", "success");
      agendar(() => navigate(destinoAposLogin, { replace: true }), 700);
    }, 300);
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <Link className="logo-jovi" to="/">
          Hello World
        </Link>

        <h1 id="login-title">Faça seu Login</h1>
        <p>Acesse sua área de estudos.</p>

        <form onSubmit={lidarComLogin} noValidate>
          <label className="sr-only" htmlFor="usuario">
            Usuário
          </label>
          <div className="input-container">
            <span className="material-symbols-outlined" aria-hidden="true">
              person
            </span>
            <input
              id="usuario"
              name="usuario"
              type="text"
              placeholder="Usuário"
              autoComplete="username"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
              required
            />
          </div>

          <label className="sr-only" htmlFor="senha">
            Senha
          </label>
          <div className="input-container">
            <span className="material-symbols-outlined" aria-hidden="true">
              lock
            </span>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              autoComplete="current-password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={enviando}>
            {enviando ? "Verificando..." : "Entrar"}
          </button>

          <p
            className={`message${tipoMensagem ? ` message--${tipoMensagem}` : ""}`}
            role="status"
            aria-live="polite"
          >
            {mensagem}
          </p>
        </form>

        <Link className="back-link" to="/">
          ← Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}
