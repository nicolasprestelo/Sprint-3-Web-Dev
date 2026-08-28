import "../styles/prototype.css";

export default function PrototypeSection() {
  return (
    <section className="prototype-section" id="prototype">
      <div className="section-header">
        <span className="section-kicker">Conheça o protótipo</span>
        <h2>Protótipo JOVI</h2>
        <p className="prototype-subtitle">
          Veja na prática como o JOVI funciona.
        </p>
      </div>

      <div className="prototype-container">
        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="phone-content">
                <span className="phone-emoji">📱</span>
                <div className="phone-text">
                  <div className="phone-label">Protótipo</div>
                  <div className="phone-subtext">JOVI</div>
                </div>
              </div>
            </div>
            <div className="phone-home"></div>
          </div>
          <div className="phone-glow"></div>
        </div>

        <div className="prototype-action">
          <a
            href="/jovi-prototype.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-explore"
          >
            Explorar protótipo
          </a>
          <div className="sparkle">Clique no botão acima para visualizar</div>
        </div>
      </div>
    </section>
  );
}
