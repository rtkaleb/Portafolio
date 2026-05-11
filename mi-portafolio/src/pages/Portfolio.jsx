import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Almiux",
    tag: "Plataforma web",
    description:
      "Plataforma de gestión y automatización de procesos. Sistema integral con flujos de trabajo personalizables y panel de control en tiempo real.",
    status: "live",
    color: "#C8F04A",
    placeholder: false,
  },
  {
    id: 2,
    name: "FYKA",
    tag: "Aplicación",
    description:
      "Aplicación orientada a la experiencia del usuario con arquitectura moderna en React y acceso condicional mediante sistema de autenticación.",
    status: "live",
    color: "#4AF0C8",
    placeholder: false,
  },
  {
    id: 3,
    name: "Próximo proyecto",
    tag: "Por revelar",
    description: "Actualmente en desarrollo. Los detalles se revelarán pronto.",
    status: "soon",
    color: "#888",
    placeholder: true,
  },
  {
    id: 4,
    name: "Próximo proyecto",
    tag: "Por revelar",
    description: "Actualmente en desarrollo. Los detalles se revelarán pronto.",
    status: "soon",
    color: "#888",
    placeholder: true,
  },
  {
    id: 5,
    name: "Próximo proyecto",
    tag: "Por revelar",
    description: "Actualmente en desarrollo. Los detalles se revelarán pronto.",
    status: "soon",
    color: "#888",
    placeholder: true,
  },
  {
    id: 6,
    name: "Próximo proyecto",
    tag: "Por revelar",
    description: "Actualmente en desarrollo. Los detalles se revelarán pronto.",
    status: "soon",
    color: "#888",
    placeholder: true,
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0B0B0B;
    --surface: #141414;
    --surface2: #1C1C1C;
    --border: rgba(255,255,255,0.07);
    --text: #F0EDE6;
    --muted: rgba(240,237,230,0.4);
    --accent1: #C8F04A;
    --accent2: #4AF0C8;
    --font-display: 'Syne', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-display);
    min-height: 100vh;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* NAV */
  nav {
    padding: 2rem 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text);
  }

  .nav-logo span {
    color: var(--accent1);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--text); }

  /* HERO */
  .hero {
    padding: 7rem 0 5rem;
    position: relative;
    overflow: hidden;
  }

  .hero-label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent1);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.1s forwards;
  }

  .hero h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.25s forwards;
  }

  .hero h1 .line2 {
    display: block;
    color: var(--muted);
  }

  .hero-desc {
    max-width: 480px;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.75;
    color: var(--muted);
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeUp 0.6s 0.4s forwards;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--accent1);
    color: #0B0B0B;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.85rem 1.75rem;
    border-radius: 3px;
    opacity: 0;
    animation: fadeUp 0.6s 0.55s forwards;
    transition: background 0.2s, transform 0.15s;
  }

  .hero-cta:hover {
    background: #d8ff5a;
    transform: translateY(-2px);
  }

  .hero-deco {
    position: absolute;
    top: 4rem;
    right: -4rem;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,240,74,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  /* SECTION */
  .section {
    padding: 5rem 0;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .section-count {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent1);
    letter-spacing: 0.1em;
  }

  /* GRID */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  /* CARD */
  .card {
    background: var(--surface);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.2s;
    cursor: default;
    min-height: 240px;
  }

  .card:not(.card--placeholder):hover {
    background: var(--surface2);
  }

  .card--placeholder {
    opacity: 0.45;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-number {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 0.12em;
  }

  .card-status {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.65rem;
    border-radius: 2px;
  }

  .card-status--live {
    background: rgba(74,240,200,0.12);
    color: var(--accent2);
    border: 1px solid rgba(74,240,200,0.2);
  }

  .card-status--soon {
    background: rgba(255,255,255,0.04);
    color: var(--muted);
    border: 1px solid var(--border);
  }

  .card-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-tag {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
  }

  .card-name {
    font-size: 1.45rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .card-desc {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.65;
    color: var(--muted);
    margin-top: 0.25rem;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .card-link {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent1);
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .card-link:hover { opacity: 0.7; }

  .card-arrow {
    font-size: 0.85rem;
    color: var(--muted);
  }

  /* ABOUT */
  .about {
    padding: 4rem 0 6rem;
    border-top: 1px solid var(--border);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .about h2 {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }

  .about p {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--muted);
    margin-bottom: 1rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .skill-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    padding: 0.35rem 0.8rem;
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--muted);
    transition: border-color 0.2s, color 0.2s;
  }

  .skill-tag:hover {
    border-color: var(--accent1);
    color: var(--accent1);
  }

  .contact-block {
    padding: 2rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface);
  }

  .contact-block h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .contact-block p {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: var(--accent2);
    text-decoration: none;
    border-bottom: 1px solid rgba(74,240,200,0.3);
    padding-bottom: 2px;
    transition: border-color 0.2s;
  }

  .contact-link:hover { border-color: var(--accent2); }

  /* FOOTER */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer p {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.08em;
  }

  footer span {
    color: var(--accent1);
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  }

  @media (max-width: 580px) {
    .grid { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.8rem; }
    .nav-links { display: none; }
  }
`;

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{styles}</style>

      <div className="container">
        {/* NAV */}
        <nav>
          <div className="nav-logo">Kaleb<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-deco" />
          <p className="hero-label">// Portafolio — Ciencia & Desarrollo</p>
          <h1>
            Investigador
            <span className="line2">&amp; Builder.</span>
          </h1>
          <p className="hero-desc">
            Doctor en ciencias. Construyo herramientas digitales que resuelven
            problemas reales — desde plataformas web hasta aplicaciones de análisis.
          </p>
          <a href="#proyectos" className="hero-cta">
            Ver proyectos →
          </a>
        </section>

        {/* PROJECTS */}
        <section className="section" id="proyectos">
          <div className="section-header">
            <h2 className="section-title">Proyectos</h2>
            <span className="section-count">06 trabajos</span>
          </div>

          <div className="grid">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`card${p.placeholder ? " card--placeholder" : ""}`}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="card-top">
                  <span className="card-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`card-status card-status--${p.status}`}
                  >
                    {p.status === "live" ? "● Live" : "○ Pronto"}
                  </span>
                </div>

                <div className="card-body">
                  <div
                    className="card-dot"
                    style={{ background: p.color }}
                  />
                  <p className="card-tag">{p.tag}</p>
                  <h3 className="card-name">{p.name}</h3>
                  <p className="card-desc">{p.description}</p>
                </div>

                {!p.placeholder && (
                  <div className="card-footer">
                    <a href="#" className="card-link">Ver proyecto</a>
                    <span className="card-arrow">↗</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="sobre-mi">
          <div className="about-grid">
            <div>
              <h2>Sobre mí</h2>
              <p>
                Soy doctor en ciencias con pasión por construir productos
                digitales que combinan rigor analítico con experiencia de usuario
                cuidada.
              </p>
              <p>
                Mi trabajo une investigación científica y desarrollo de software —
                desde el diseño de sistemas hasta su implementación en producción.
              </p>
              <div className="skills-list">
                {["React", "JavaScript", "Python", "Data Analysis",
                  "UI/UX", "Node.js", "Git", "Netlify"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div id="contacto">
              <div className="contact-block">
                <h3>¿Tienes un proyecto?</h3>
                <p>
                  Estoy abierto a colaboraciones, proyectos freelance y
                  posiciones de investigación aplicada.
                </p>
                <a href="mailto:tu@email.com" className="contact-link">
                  tu@email.com ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© 2025 <span>Kaleb</span>. Todos los derechos reservados.</p>
          <p>Hecho con <span>React</span> · Desplegado en Netlify</p>
        </footer>
      </div>
    </>
  );
}
