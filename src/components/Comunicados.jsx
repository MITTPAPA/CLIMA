import "../styles/comp.css";

export default function Comunicados() {
  return (
    <section className="comunicados">
      <div className="container comunicados-content">
        <div className="comunicados-left">
          <img src="/images/comunicados.png" alt="Comunicados" />

          <div>
            <h4>COMUNICADOS</h4>
            <p>Consulte los comunicados y noticias oficiales del IDEAM.</p>
          </div>
        </div>

        <a
          href="https://www.ideam.gov.co/sala-de-prensa/boletines"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-comunicados"
        >
          Consultar los comunicados →
        </a>
      </div>
    </section>
  );
}
