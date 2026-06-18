import { useState, useEffect } from "react";
import "../styles/comp.css";

export default function PapaSection() {
  const [modalAbierto, setModalAbierto] = useState(false);

  // Congelar el scroll de la página de fondo al abrir el modal
  useEffect(() => {
    if (modalAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalAbierto]);

  return (
    <>
      {/* ── Sección Principal de la Tarjeta ── */}
      <section className="papa container">
        <div className="texto">
          <h2>
            La papa mediana
            <br />
            también alimenta
          </h2>

          <p>Apoyar al campo es elegir papa colombiana de todos los tamaños.</p>

          <button type="button" onClick={() => setModalAbierto(true)}>
            Ver cómo apoyar el campo
          </button>
        </div>

        <div className="imagen">
          <img
            src="/images/papa-familia.png"
            alt="Familia productora de papa"
          />
        </div>
      </section>

      {/* ── Render Condicional del Modal Estilizado ── */}
      {modalAbierto && (
        <div
          className="glosario-overlay"
          onClick={() => setModalAbierto(false)} // Cierra al hacer clic afuera
        >
          <div
            className="glosario-modal"
            onClick={(e) => e.stopPropagation()} // Evita cierre al hacer clic adentro
          >
            {/* ── Header ── */}
            <div className="glosario-modal__header">
              <div>
                <span className="glosario-modal__eyebrow">
                  🇨🇴 Campaña Nacional
                </span>
                <h2 className="glosario-modal__titulo">
                  Valorar todos los tamaños fortalece la producción de papa
                </h2>
              </div>
              <button
                type="button"
                className="glosario-modal__cerrar"
                onClick={() => setModalAbierto(false)}
              >
                ✕
              </button>
            </div>

            {/* ── Cuerpo Scrollable ── */}
            <div className="glosario-modal__cuerpo">
              {/* Introducción */}
              <div className="glosario-grupo">
                <p
                  className="glosario-termino__def"
                  style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                >
                  La papa es uno de los cultivos más importantes para la
                  seguridad alimentaria y la economía rural de Colombia. Cada
                  cosecha es el resultado del trabajo de miles de familias
                  productoras que enfrentan desafíos relacionados con el clima,
                  la disponibilidad de agua, los costos de producción y la
                  sanidad de los cultivos. En este contexto, aprovechar y
                  comercializar papas de todos los tamaños se convierte en una
                  estrategia fundamental para reducir pérdidas y mejorar la
                  rentabilidad de la actividad agrícola.
                </p>
                <p
                  className="glosario-termino__def"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginTop: "1rem",
                  }}
                >
                  Aunque tradicionalmente algunos consumidores prefieren papas
                  de gran tamaño, las papas medianas poseen las mismas
                  características nutricionales, culinarias y de calidad que
                  otros calibres. Su tamaño no afecta su contenido de
                  carbohidratos, fibra, vitaminas o minerales, ni limita su uso
                  en preparaciones domésticas o comerciales.
                </p>
              </div>

              {/* ¿Por qué es importante? */}
              <div className="glosario-grupo">
                <div className="glosario-letra">
                  ¿Por qué es importante consumir papa mediana?
                </div>
                <ul style={{ paddingLeft: "1.2rem", margin: "0.5rem 0 0 0" }}>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ✔ Tiene el mismo valor nutricional que las papas de mayor
                    tamaño.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ✔ Es la más apta para el consumo fresco, la preparación
                    diaria de alimentos y la transformación agroindustrial.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ✔ Permite aprovechar de manera óptima la producción total
                    obtenida en cada lote.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ✔ Reduce drásticamente las pérdidas poscosecha y el
                    desperdicio injustificado de alimentos.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ✔ Contribuye a generar mayores ingresos dignos y directos
                    para los pequeños productores.
                  </li>
                </ul>
              </div>

              {/* Beneficios para los productores */}
              <div className="glosario-grupo">
                <div className="glosario-letra">
                  Beneficios para los productores
                </div>
                <p className="glosario-intro">
                  Cuando el mercado y los consumidores finales aceptan y
                  demandan papas de diferentes tamaños, los agricultores pueden
                  comercializar una mayor proporción de su producción sin ser
                  penalizados por el calibre. Esto se traduce en:
                </p>
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.4rem", listStyleType: "circle" }}
                  >
                    Mayor aprovechamiento de la cosecha general.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.4rem", listStyleType: "circle" }}
                  >
                    Reducción sustancial de pérdidas económicas injustas.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.4rem", listStyleType: "circle" }}
                  >
                    Mejor estabilidad de los ingresos de las familias rurales.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.4rem", listStyleType: "circle" }}
                  >
                    Incremento inmediato de la rentabilidad real del cultivo.
                  </li>
                  <li
                    className="glosario-termino__def"
                    style={{ marginBottom: "0.4rem", listStyleType: "circle" }}
                  >
                    Fortalecimiento y dinamización de las economías locales en
                    Colombia.
                  </li>
                </ul>
                <p
                  className="glosario-termino__def"
                  style={{
                    fontSize: "0.88rem",
                    fontStyle: "italic",
                    marginTop: "0.75rem",
                    color: "#555",
                  }}
                >
                  *Además, en muchas regiones productoras de Colombia, las
                  variaciones climáticas, la fertilidad natural del suelo y la
                  disponibilidad de agua influyen directamente en el tamaño de
                  los tubérculos. Promover este consumo ayuda a disminuir el
                  impacto de factores que no siempre están bajo el control de
                  los agricultores.
                </p>
              </div>

              {/* Aporte a la Sostenibilidad */}
              <div className="glosario-grupo">
                <div className="glosario-letra">
                  Un aporte a la sostenibilidad del sector
                </div>
                <p className="glosario-intro">
                  El aprovechamiento de papas de todos los calibres contribuye a
                  construir sistemas alimentarios más sostenibles. Al reducir el
                  desperdicio de productos perfectamente aptos para el consumo
                  humano, se optimizan todos los recursos ambientales e
                  invertidos durante el ciclo productivo:
                </p>

                <div
                  className="glosario-fenomenos"
                  style={{ marginTop: "0.5rem" }}
                >
                  <div className="glosario-fenomeno-card">
                    <span className="glosario-fenomeno-card__icono">💧</span>
                    <div>
                      <h4 className="glosario-fenomeno-card__nombre">
                        Agua y Suelo Agrícola
                      </h4>
                      <p className="glosario-fenomeno-card__desc">
                        Cada litro de agua empleado en el riego y cada hectárea
                        de tierra trabajada rinden al máximo al comercializar el
                        100% de lo cosechado.
                      </p>
                    </div>
                  </div>
                  <div className="glosario-fenomeno-card">
                    <span className="glosario-fenomeno-card__icono">🧑‍🌾</span>
                    <div>
                      <h4 className="glosario-fenomeno-card__nombre">
                        Insumos y Mano de Obra
                      </h4>
                      <p className="glosario-fenomeno-card__desc">
                        Optimiza el uso de fertilizantes, la energía empleada y
                        dignifica el tiempo y esfuerzo dedicado por los
                        jornaleros en el campo.
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="glosario-termino__def"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    marginTop: "1.25rem",
                    color: "#1a4e1a",
                    textAlign: "center",
                  }}
                >
                  ¡De esta manera, cada tubérculo cosechado representa una
                  oportunidad para generar alimento, ingresos y bienestar para
                  las familias vinculadas a la cadena productiva de la papa!
                </p>
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="glosario-modal__footer">
              <button
                type="button"
                className="glosario-modal__btn-cerrar"
                onClick={() => setModalAbierto(false)}
              >
                Apoyar al Campo Colombiano
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
