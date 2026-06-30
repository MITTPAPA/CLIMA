import "../styles/comp.css";


export default function ABCNino() {
  return (
    <section className="abc container">

      <div className="abc-left">

        <h2>
          ABC DE
          <br />
          EL NIÑO
        </h2>

        <p>
          El clima está cambiando y la temporada
          viene con retos para el campo.
        </p>

      </div>

      <div className="abc-right">
        <img src="/images/abc-nino.png" alt="" />
      </div>

    </section>
  );
}
