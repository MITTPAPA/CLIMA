import "../styles/comp.css";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section id="inicio" className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            Fenómeno de El Niño 2026:
            <br />
            No es suerte,
            <br />
            es preparación.
          </h1>

          <p>
            Aprenda a proteger su cultivo
            y cuidar su inversión.
          </p>

          <div className="hero-buttons">
            <button className="green" onClick={() => scrollToSection("acciones")}>
              Conocer el Plan
            </button>

            <button className="outline" onClick={() => scrollToSection("reportes")}>
              Ver Alertas
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
