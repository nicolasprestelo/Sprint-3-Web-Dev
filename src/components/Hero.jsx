import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Hero() {
  const { usuarioAtual } = useAuth();
  const ctaTarget = usuarioAtual ? "/dashboard" : "/login";
  const ctaLabel = usuarioAtual ? "Acessar Área de Estudos" : "Começar Agora";

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <span className="ia-badge">✦ Agora com IA integrada</span>

        <h1 id="hero-title">
          Capture<span>/</span>Organize<span>/</span>Estude.
        </h1>

        <p>
          A plataforma inteligente que organiza suas anotações, gera resumos e
          cria flashcards automaticamente para você.
        </p>

        <Link className="btn-primary" to={ctaTarget}>
          {ctaLabel}
        </Link>
      </section>

      <div className="glow-sphere glow-sphere--right" aria-hidden="true" />
      <div className="glow-sphere glow-sphere--left" aria-hidden="true" />

      <section className="social-proof" aria-label="Destaque da plataforma">
        <div className="avatars" aria-hidden="true">
          <span className="avatar avatar--1">A</span>
          <span className="avatar avatar--2">K</span>
          <span className="avatar avatar--3">J</span>
          <span className="avatar avatar--4">F</span>
        </div>
        <p>
          <strong>+80% dos estudantes</strong> gostariam de ter essa experiência
          de organização.
        </p>
      </section>
    </>
  );
}
