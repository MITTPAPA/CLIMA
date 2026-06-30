import { useState, useEffect } from "react";
import "../styles/comp.css";

const cardsData = [
  {
    id: "agua",
    title: "Manejo del agua y sistemas de riego",
    img: "/images/card1.png",
    importancia:
      "El agua es un recurso esencial para el cultivo de papa, ya que interviene en la absorción de nutrientes, el crecimiento de la planta y la formación de tubérculos. Un manejo adecuado permite maximizar el rendimiento y reducir pérdidas productivas.",
    aspectosClave: [
      "Garantiza el desarrollo uniforme del cultivo.",
      "Favorece la absorción y transporte de nutrientes.",
      "Reduce los efectos del estrés hídrico por sequía.",
      "Contribuye a la formación y llenado de tubérculos.",
      "Disminuye riesgos asociados al exceso o déficit de humedad.",
    ],
    seccionesAdicionales: [
      {
        subtitulo: "Sistemas de riego más utilizados",
        itemsDestacados: [
          {
            nombre: "Riego por aspersión",
            desc: "Distribuye el agua simulando lluvia.",
          },
          {
            nombre: "Riego por goteo",
            desc: "Suministra agua directamente a la raíz, optimizando su uso.",
          },
          {
            nombre: "Riego por gravedad o surcos",
            desc: "Aprovecha la pendiente natural del terreno.",
          },
        ],
      },
      {
        subtitulo: "Recomendaciones prácticas",
        listaSimple: [
          "Monitorear periódicamente la humedad del suelo.",
          "Ajustar los riegos según la etapa de desarrollo del cultivo.",
          "Evitar encharcamientos que favorezcan enfermedades.",
          "Realizar mantenimiento frecuente a los sistemas de riego.",
        ],
      },
    ],
  },
  {
    id: "suelo",
    title: "Conservación y protección del suelo",
    img: "/images/card2.png",
    importancia:
      "El suelo es la base de la producción agrícola. Su conservación permite mantener la fertilidad, mejorar la disponibilidad de agua y garantizar la sostenibilidad de los sistemas productivos de papa.",
    aspectosClave: [
      "Reduce la erosión causada por lluvia y viento.",
      "Mejora la infiltración y almacenamiento de agua.",
      "Favorece el desarrollo de las raíces.",
      "Incrementa la actividad biológica del suelo.",
      "Mantiene la productividad a largo plazo.",
    ],
    seccionesAdicionales: [
      {
        subtitulo: "Prácticas recomendadas",
        listaSimple: [
          "Implementar coberturas vegetales.",
          "Incorporar materia orgánica.",
          "Realizar siembras en curvas de nivel.",
          "Construir terrazas en terrenos con pendiente.",
          "Evitar el tránsito excesivo de maquinaria.",
        ],
      },
      {
        subtitulo: "Riesgos de un manejo inadecuado",
        listaSimple: [
          "Pérdida de fertilidad de la capa arable.",
          "Compactación severa del suelo.",
          "Disminución drástica de la productividad.",
          "Mayor susceptibilidad a la erosión hídrica y eólica.",
        ],
      },
    ],
  },
  {
    id: "siembra",
    title: "Planeación de la siembra y selección de semillas",
    img: "/images/card3.png",
    importancia:
      "Una adecuada planeación permite reducir riesgos productivos y aprovechar de manera eficiente las condiciones climáticas, los recursos disponibles y el potencial genético de las variedades sembradas.",
    aspectosClave: [
      "Analizar las condiciones climáticas de la zona.",
      "Definir la fecha de siembra más adecuada.",
      "Preparar correctamente el terreno.",
      "Verificar la disponibilidad de insumos.",
      "Seleccionar material de siembra de calidad.",
    ],
    seccionesAdicionales: [
      {
        subtitulo: "Características de una buena semilla",
        listaSimple: [
          "Libre de plagas y enfermedades limitantes.",
          "Procedente de fuentes confiables y certificadas.",
          "Con buen vigor fisiológico y capacidad de brotación.",
          "Adaptada a las condiciones agroecológicas de la región.",
          "Con potencial productivo ampliamente comprobado.",
        ],
      },
      {
        subtitulo: "Beneficios de utilizar semilla certificada",
        listaSimple: [
          "Mayor uniformidad y densidad del cultivo en campo.",
          "Mejor establecimiento inicial de las plantas.",
          "Menor incidencia de enfermedades transmitidas por tubérculo.",
          "Incremento notable en la productividad final.",
        ],
      },
    ],
  },
  {
    id: "nutricion",
    title: "Nutrición vegetal y sanidad del cultivo",
    img: "/images/card4.png",
    importancia:
      "La nutrición y la sanidad son factores fundamentales para obtener altos rendimientos y una producción de calidad. Un cultivo bien nutrido presenta mayor vigor y mejor capacidad para enfrentar condiciones climáticas adversas.",
    aspectosClave: [
      "Realizar monitoreos periódicos y rigurosos del cultivo.",
      "Basar los planes de fertilización en análisis de suelo previos.",
      "Utilizar siempre semilla sana y certificada.",
      "Implementar estrategias de manejo integrado de plagas y enfermedades (MIPE).",
      "Aplicar medidas preventivas oportunas antes de que aparezcan daños severos.",
    ],
    seccionesAdicionales: [
      {
        subtitulo: "Nutrición Vegetal (Nutrientes principales)",
        itemsDestacados: [
          {
            nombre: "Nitrógeno (N)",
            desc: "Favorece el crecimiento vegetativo, desarrollo de hojas y tallos.",
          },
          {
            nombre: "Fósforo (P)",
            desc: "Estimula fuertemente el desarrollo radicular y el inicio de la tuberización.",
          },
          {
            nombre: "Potasio (K)",
            desc: "Mejora el llenado, la calidad interna, consistencia y tamaño de los tubérculos.",
          },
        ],
      },
      {
        subtitulo: "Sanidad (Principales amenazas fitosanitarias)",
        listaSimple: [
          "Tizón tardío o Gota (Phytophthora infestans).",
          "Polilla guatemalteca de la papa.",
          "Rizoctoniasis o Costra negra.",
          "Pudriciones bacterianas en campo y almacén.",
          "Complejo de Virus de la papa.",
        ],
      },
      {
        subtitulo: "Resultado Esperado",
        listaSimple: [
          "Mayor productividad por hectárea.",
          "Mejor calidad comercial y culinaria de los tubérculos.",
          "Reducción sustancial de pérdidas económicas.",
          "Uso más eficiente de los recursos agrícolas disponibles.",
          "Sistemas productivos más sostenibles y resilientes frente al cambio climático.",
        ],
      },
    ],
  },
];

export default function Actions() {
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  // Congelar el scroll del cuerpo de la página cuando el modal esté abierto
  useEffect(() => {
    if (tarjetaSeleccionada) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [tarjetaSeleccionada]);

  return (
    <>
      <section className="actions container" id="acciones">
        <h2>PLAN DE ACCIÓN</h2>

        <div className="cards">
          {cardsData.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              {/* Cambiado a botón estético para disparar el Modal */}
              <button
                type="button"
                className="btn-ver-mas"
                onClick={() => setTarjetaSeleccionada(item)}
              >
                Ver más →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Render Condicional del Modal de Detalles ── */}
      {tarjetaSeleccionada && (
        <div
          className="glosario-overlay"
          onClick={() => setTarjetaSeleccionada(null)}
        >
          <div className="glosario-modal" onClick={(e) => e.stopPropagation()}>
            {/* ── Header ── */}
            <div className="glosario-modal__header">
              <div>
                <span className="glosario-modal__eyebrow">
                  📋 Práctica Recomendada
                </span>
                <h2 className="glosario-modal__titulo">
                  {tarjetaSeleccionada.title}
                </h2>
              </div>
              <button
                type="button"
                className="glosario-modal__cerrar"
                onClick={() => setTarjetaSeleccionada(null)}
              >
                ✕
              </button>
            </div>

            {/* ── Cuerpo Scrollable ── */}
            <div className="glosario-modal__cuerpo">
              {/* Sección: Importancia */}
              <div className="glosario-grupo">
                <div className="glosario-letra">¿Por qué es importante?</div>
                <p
                  className="glosario-termino__def"
                  style={{ fontSize: "1rem", marginBottom: "1.5rem" }}
                >
                  {tarjetaSeleccionada.importancia}
                </p>
              </div>

              {/* Sección: Aspectos Clave / Buenas Prácticas */}
              <div className="glosario-grupo">
                <div className="glosario-letra">Aspectos Clave y Manejo</div>
                <ul style={{ paddingLeft: "1.2rem", margin: "0 0 1.5rem 0" }}>
                  {tarjetaSeleccionada.aspectosClave.map((punto, i) => (
                    <li
                      key={i}
                      className="glosario-termino__def"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      ✔ {punto}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secciones Dinámicas Adicionales (Riegos, Riesgos, Semillas, etc.) */}
              {tarjetaSeleccionada.seccionesAdicionales &&
                tarjetaSeleccionada.seccionesAdicionales.map(
                  (seccion, index) => (
                    <div key={index} className="glosario-grupo">
                      <div className="glosario-letra">{seccion.subtitulo}</div>

                      {/* Si la sección contiene elementos destacados como Sistemas de Riego o Nutrientes */}
                      {seccion.itemsDestacados && (
                        <div
                          className="glosario-fenomenos"
                          style={{ marginTop: "0.5rem" }}
                        >
                          {seccion.itemsDestacados.map((elem, idx) => (
                            <div key={idx} className="glosario-fenomeno-card">
                              <span className="glosario-fenomeno-card__icono">
                                🌱
                              </span>
                              <div>
                                <h4 className="glosario-fenomeno-card__nombre">
                                  {elem.nombre}
                                </h4>
                                <p className="glosario-fenomeno-card__desc">
                                  {elem.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Si es una lista normal de viñetas */}
                      {seccion.listaSimple && (
                        <ul
                          style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}
                        >
                          {seccion.listaSimple.map((item, idx) => (
                            <li
                              key={idx}
                              className="glosario-termino__def"
                              style={{
                                marginBottom: "0.5rem",
                                listStyleType: "circle",
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ),
                )}
            </div>

            {/* ── Footer ── */}
            <div className="glosario-modal__footer">
              <button
                type="button"
                className="glosario-modal__btn-cerrar"
                onClick={() => setTarjetaSeleccionada(null)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
