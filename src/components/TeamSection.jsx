import { integrantes } from "../data/equipe";

function obterIniciais(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <div className="footer-container">
      <span className="section-kicker">Quem está por trás</span>
      <h2>Nossa Equipe</h2>
      <div className="team-grid" aria-live="polite">
        {integrantes.map(({ nome, rm, foto }) => (
          <article className="member-card" key={rm}>
            <div className="member-avatar" aria-hidden="true">
              {foto ? (
                <img src={foto} alt={nome} className="member-photo" />
              ) : (
                obterIniciais(nome)
              )}
            </div>
            <h3>{nome}</h3>
            <span>{rm}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
