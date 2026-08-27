import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { usuarioAtual } = useAuth();

  return (
    <header className="main-header">
      <a className="logo" href="#inicio" aria-label="Hello World Corporation — início">
        Hello World Corporation
      </a>

      <nav className="nav-menu" aria-label="Navegação principal">
        <ul>
          <li>
            <a href="#funcionalidades">Funcionalidades</a>
          </li>
          <li>
            <a href="#beneficios">Benefícios</a>
          </li>
          <li>
            <a href="#equipe">Equipe</a>
          </li>
        </ul>
      </nav>

      <Link className="header-login" to={usuarioAtual ? "/dashboard" : "/login"}>
        {usuarioAtual ? "Área de estudos" : "Entrar"}
      </Link>
    </header>
  );
}
