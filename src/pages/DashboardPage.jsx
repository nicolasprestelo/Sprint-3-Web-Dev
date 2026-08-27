import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { atalhosEstudo } from "../data/conteudo";
import "../styles/dashboard.css";

export default function DashboardPage() {
  const { usuarioAtual, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Área de Estudos | Hello World Corporation";
  }, []);

  function lidarComLogout() {
    logout();
    navigate("/");
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell" aria-labelledby="dashboard-title">
        <header className="dashboard-header">
          <Link className="logo" to="/" aria-label="Hello World Corporation — início">
            Hello World Corporation
          </Link>

          <button type="button" className="dashboard-logout" onClick={lidarComLogout}>
            Sair
          </button>
        </header>

        <div className="dashboard-hero">
          <span className="section-kicker">Área do estudante</span>
          <h1 id="dashboard-title">Olá, {usuarioAtual.usuario}!</h1>
          <p>
            Este é um painel demonstrativo para representar a experiência após o
            login. Aqui ficam os atalhos principais para organizar, revisar e
            estudar seus conteúdos.
          </p>
        </div>

        <div className="dashboard-grid" aria-label="Atalhos da área de estudos">
          {atalhosEstudo.map(({ icon, title, description }) => (
            <article className="dashboard-card" key={title}>
              <span className="material-symbols-outlined dashboard-icon" aria-hidden="true">
                {icon}
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="dashboard-note">
          <strong>Projeto acadêmico:</strong> esta área usa autenticação local
          demonstrativa e não substitui um backend real.
        </div>
      </section>
    </main>
  );
}
