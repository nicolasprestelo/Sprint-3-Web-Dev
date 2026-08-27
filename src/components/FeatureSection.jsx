export default function FeatureSection({ id, kicker, title, items }) {
  const titleId = `${id}-title`;

  return (
    <section className="content-section" id={id} aria-labelledby={titleId}>
      <div className="section-header">
        <span className="section-kicker">{kicker}</span>
        <h2 id={titleId}>{title}</h2>
      </div>

      <div className="cards-grid">
        {items.map(({ icon, title: itemTitle, description }) => (
          <article className="feature-card" key={itemTitle}>
            <span className="material-symbols-outlined feature-icon" aria-hidden="true">
              {icon}
            </span>
            <h3>{itemTitle}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
