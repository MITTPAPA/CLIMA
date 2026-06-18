import "../styles/comp.css";

export default function Contact() {
  return (
    <section id="ayuda" className="contact">
      <div className="container">
        <h2>CONTACTO Y AYUDA</h2>

        <p>Estamos para acompañarlo durante la temporada climática.</p>

        <div className="contact-card">
          <h3 className="contact-title">
            Disponibilidad para acompañamiento regional
          </h3>

          <div>
            <img src="/images/asistencia.png" alt="" />
            <h4>Asistencia técnica</h4>
          </div>

          <div>
            <img src="/images/acompanamiento.png" alt="" />
            <h4>Acompañamiento regional</h4>
          </div>

          <div>
            <img src="/images/comites.png" alt="" />
            <h4>Comités municipales</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
