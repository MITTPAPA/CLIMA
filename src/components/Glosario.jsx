import { useState, useEffect } from "react";
import "../styles/comp.css";

const glosarioData = {
  letras: [
    {
      letra: "A",
      terminos: [
        {
          nombre: "Alerta Climática",
          definicion:
            "Aviso emitido cuando existe una alta probabilidad de que ocurra un fenómeno meteorológico que pueda afectar los cultivos, como heladas, lluvias intensas, granizadas o sequías.",
        },
        {
          nombre: "Anomalía Climática",
          definicion:
            "Variación de una condición climática respecto a los valores normales históricos de una zona. Por ejemplo, una temperatura más alta o una lluvia menor a la habitual.",
        },
      ],
    },
    {
      letra: "B",
      terminos: [
        {
          nombre: "Boletín Agroclimático",
          definicion:
            "Documento técnico que presenta información sobre el clima, el estado actual del tiempo y recomendaciones para la toma de decisiones agrícolas.",
        },
        {
          nombre: "Brillo Solar",
          definicion:
            "Cantidad de horas durante las cuales la radiación solar llega directamente a la superficie terrestre. Influye en el crecimiento y desarrollo de la papa.",
        },
      ],
    },
    {
      letra: "C",
      terminos: [
        {
          nombre: "Cambio Climático",
          definicion:
            "Modificación significativa y prolongada de los patrones climáticos debido a causas naturales y actividades humanas.",
        },
        {
          nombre: "Clima",
          definicion:
            "Promedio de las condiciones atmosféricas de una región durante largos períodos de tiempo (generalmente más de 30 años).",
        },
        {
          nombre: "Condensación",
          definicion:
            "Proceso mediante el cual el vapor de agua se transforma en gotas líquidas, formando nubes, niebla o rocío.",
        },
      ],
    },
    {
      letra: "D",
      terminos: [
        {
          nombre: "Déficit Hídrico",
          definicion:
            "Situación en la que la cantidad de agua disponible en el suelo es insuficiente para satisfacer las necesidades del cultivo.",
        },
        {
          nombre: "Drenaje",
          definicion:
            "Capacidad del suelo para evacuar el exceso de agua. Un drenaje deficiente favorece enfermedades radiculares en la papa.",
        },
      ],
    },
    {
      letra: "E",
      terminos: [
        {
          nombre: "Evapotranspiración",
          definicion:
            "Pérdida de agua desde el suelo y las plantas hacia la atmósfera. Es un indicador importante para programar el riego.",
        },
        {
          nombre: "Evento Extremo",
          definicion:
            "Fenómeno meteorológico de gran intensidad, como lluvias torrenciales, sequías prolongadas, granizadas o heladas severas.",
        },
      ],
    },
    {
      letra: "G",
      terminos: [
        {
          nombre: "Granizada",
          definicion:
            "Precipitación en forma de hielo que puede causar daños físicos a las hojas, tallos y tubérculos de la papa.",
        },
      ],
    },
    {
      letra: "H",
      terminos: [
        {
          nombre: "Helada",
          definicion:
            "Descenso de la temperatura del aire o de la superficie del suelo hasta valores cercanos o inferiores a 0 °C, causando daños en los tejidos de las plantas.",
        },
        {
          nombre: "Humedad Relativa",
          definicion:
            "Porcentaje de vapor de agua presente en el aire respecto al máximo que podría contener a una temperatura determinada.",
        },
      ],
    },
    {
      letra: "I",
      terminos: [
        {
          nombre: "Índice de Riesgo Climático",
          definicion:
            "Indicador utilizado para estimar la probabilidad de afectación de un cultivo debido a fenómenos meteorológicos.",
        },
        {
          nombre: "Inundación",
          definicion:
            "Acumulación excesiva de agua en una zona agrícola que puede generar pérdida de cultivos y erosión del suelo.",
        },
      ],
    },
    {
      letra: "L",
      terminos: [
        {
          nombre: "La Niña",
          definicion:
            "Fenómeno climático asociado al enfriamiento anormal de las aguas del océano Pacífico ecuatorial. En muchas regiones de Colombia suele aumentar las lluvias.",
        },
      ],
    },
    {
      letra: "M",
      terminos: [
        {
          nombre: "Meteorología",
          definicion:
            "Ciencia que estudia la atmósfera y los fenómenos que determinan el estado del tiempo.",
        },
        {
          nombre: "Microclima",
          definicion:
            "Condiciones climáticas particulares de un área pequeña, como una finca o una parcela.",
        },
      ],
    },
    {
      letra: "N",
      terminos: [
        {
          nombre: "Neblina",
          definicion:
            "Suspensión de pequeñas gotas de agua en el aire que reduce la visibilidad y aumenta la humedad ambiental.",
        },
      ],
    },
    {
      letra: "P",
      terminos: [
        {
          nombre: "Precipitación",
          definicion:
            "Agua que cae de la atmósfera en forma de lluvia, llovizna, granizo o nieve.",
        },
        {
          nombre: "Pronóstico del Tiempo",
          definicion:
            "Predicción de las condiciones atmosféricas futuras para una zona y período determinados.",
        },
      ],
    },
    {
      letra: "R",
      terminos: [
        {
          nombre: "Radiación Solar",
          definicion:
            "Energía emitida por el Sol que llega a la superficie terrestre y es fundamental para la fotosíntesis.",
        },
        {
          nombre: "Riesgo Agroclimático",
          definicion:
            "Probabilidad de que un fenómeno climático afecte negativamente la producción agrícola.",
        },
      ],
    },
    {
      letra: "S",
      terminos: [
        {
          nombre: "Sequía",
          definicion:
            "Período prolongado con precipitaciones inferiores a lo normal, que reduce la disponibilidad de agua para los cultivos.",
        },
        {
          nombre: "Saturación del Suelo",
          definicion:
            "Estado en el que los poros del suelo están completamente llenos de agua, limitando la oxigenación de las raíces.",
        },
      ],
    },
    {
      letra: "T",
      terminos: [
        {
          nombre: "Temperatura Máxima",
          definicion:
            "Valor más alto de temperatura registrado durante un día.",
        },
        {
          nombre: "Temperatura Mínima",
          definicion:
            "Valor más bajo de temperatura registrado durante un día.",
        },
        {
          nombre: "Tiempo Atmosférico",
          definicion:
            "Estado de la atmósfera en un momento y lugar determinados, incluyendo temperatura, lluvia, viento y humedad.",
        },
      ],
    },
    {
      letra: "V",
      terminos: [
        {
          nombre: "Variabilidad Climática",
          definicion:
            "Fluctuaciones naturales de las condiciones climáticas que ocurren en diferentes escalas de tiempo.",
        },
        {
          nombre: "Viento",
          definicion:
            "Movimiento del aire generado por diferencias de presión atmosférica. Puede favorecer la dispersión de enfermedades o causar daños mecánicos en los cultivos.",
        },
      ],
    },
  ],
  fenomenos: [
    {
      nombre: "Heladas",
      descripcion:
        "Pueden quemar hojas y tallos, reduciendo el rendimiento del cultivo.",
      icono: "🌡️",
    },
    {
      nombre: "Exceso de Lluvias",
      descripcion:
        "Favorece enfermedades como la gota o tizón tardío y dificulta las labores agrícolas.",
      icono: "🌧️",
    },
    {
      nombre: "Déficit de Lluvias",
      descripcion:
        "Reduce el crecimiento de la planta y el desarrollo de los tubérculos.",
      icono: "☀️",
    },
    {
      nombre: "Granizadas",
      descripcion:
        "Generan daños físicos directos en el follaje y aumentan el riesgo de enfermedades.",
      icono: "🌨️",
    },
    {
      nombre: "Oscilación del Sur – ENSO",
      descripcion:
        "Sistema climático global que incluye los fenómenos de El Niño y La Niña, con influencia importante sobre las lluvias y temperaturas en Colombia.",
      icono: "🌊",
    },
    {
      nombre: "El Niño",
      descripcion:
        "Fenómeno asociado al calentamiento anormal del océano Pacífico ecuatorial. En gran parte de Colombia suele aumentar las temperaturas y disminuir las lluvias.",
      icono: "🌤️",
    },
  ],
  interpretacion: [
    {
      señal: "Temperaturas mínimas bajas",
      accion: "Posible riesgo de heladas.",
    },
    {
      señal: "Probabilidad alta de lluvia",
      accion: "Incremento del riesgo de enfermedades foliares.",
    },
    {
      señal: "Déficit hídrico",
      accion: "Evaluar necesidad de riego.",
    },
    {
      señal: "Exceso de precipitación",
      accion: "Revisar drenajes y prevenir encharcamientos.",
    },
    {
      señal: "Humedad relativa alta (>80%)",
      accion: "Mayor riesgo de tizón tardío (Phytophthora infestans).",
    },
    {
      señal: "Alertas meteorológicas",
      accion: "Implementar medidas preventivas en el cultivo.",
    },
  ],
};

export default function Glosario() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [pestañaActiva, setPestañaActiva] = useState("terminos");
  const [busqueda, setBusqueda] = useState("");

  // Controla el scroll del body del navegador cuando el modal está abierto
  useEffect(() => {
    if (modalAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Resetea los estados al cerrar
      setBusqueda("");
      setPestañaActiva("terminos");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalAbierto]);

  const terminos = glosarioData.letras.flatMap((l) =>
    l.terminos.map((t) => ({ ...t, letra: l.letra })),
  );

  const terminosFiltrados = busqueda.trim()
    ? terminos.filter(
        (t) =>
          t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          t.definicion.toLowerCase().includes(busqueda.toLowerCase()),
      )
    : null;

  const letrasFiltradas = terminosFiltrados
    ? [...new Set(terminosFiltrados.map((t) => t.letra))].map((letra) => ({
        letra,
        terminos: terminosFiltrados.filter((t) => t.letra === letra),
      }))
    : glosarioData.letras;

  return (
    <>
      {/* ── Tarjeta de entrada ── */}
      <section className="glosario">
        <div className="container">
          <div className="glosario-card">
            <h3>
              GLOSARIO
              <br />
              CLIMÁTICO
            </h3>
            <p>
              Aprenda los conceptos básicos para interpretar boletines, alertas
              y pronósticos.
            </p>

            {/* Acción de React para abrir el modal */}
            <button
              type="button"
              className="btn-glosario"
              onClick={() => setModalAbierto(true)}
            >
              Conocer los términos aquí
            </button>
          </div>
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
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
          >
            {/* ── Header ── */}
            <div className="glosario-modal__header">
              <div>
                <span className="glosario-modal__eyebrow">
                  🌿 Papa en Colombia
                </span>
                <h2 className="glosario-modal__titulo">Glosario Climático</h2>
              </div>
              <button
                type="button"
                className="glosario-modal__cerrar"
                onClick={() => setModalAbierto(false)}
              >
                ✕
              </button>
            </div>

            {/* ── Tabs ── */}
            <div className="glosario-modal__tabs">
              <button
                className={`glosario-tab ${pestañaActiva === "terminos" ? "glosario-tab--activo" : ""}`}
                onClick={() => setPestañaActiva("terminos")}
              >
                Términos
              </button>
              <button
                className={`glosario-tab ${pestañaActiva === "fenomenos" ? "glosario-tab--activo" : ""}`}
                onClick={() => setPestañaActiva("fenomenos")}
              >
                Fenómenos clave
              </button>
              <button
                className={`glosario-tab ${pestañaActiva === "interpretacion" ? "glosario-tab--activo" : ""}`}
                onClick={() => setPestañaActiva("interpretacion")}
              >
                Cómo interpretar
              </button>
            </div>

            {/* ── Cuerpo scrollable ── */}
            <div className="glosario-modal__cuerpo">
              {/* Pestaña: Términos */}
              {pestañaActiva === "terminos" && (
                <>
                  <input
                    type="text"
                    className="glosario-buscador"
                    placeholder="Buscar término..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  {letrasFiltradas.length === 0 ? (
                    <p className="glosario-vacio">
                      No se encontraron términos para "{busqueda}".
                    </p>
                  ) : (
                    letrasFiltradas.map((grupo) => (
                      <div key={grupo.letra} className="glosario-grupo">
                        <div className="glosario-letra">{grupo.letra}</div>
                        {grupo.terminos.map((termino) => (
                          <div
                            key={termino.nombre}
                            className="glosario-termino"
                          >
                            <h4 className="glosario-termino__nombre">
                              {termino.nombre}
                            </h4>
                            <p className="glosario-termino__def">
                              {termino.definicion}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </>
              )}

              {/* Pestaña: Fenómenos */}
              {pestañaActiva === "fenomenos" && (
                <div className="glosario-fenomenos">
                  {glosarioData.fenomenos.map((f) => (
                    <div key={f.nombre} className="glosario-fenomeno-card">
                      <span className="glosario-fenomeno-card__icono">
                        {f.icono}
                      </span>
                      <div>
                        <h4 className="glosario-fenomeno-card__nombre">
                          {f.nombre}
                        </h4>
                        <p className="glosario-fenomeno-card__desc">
                          {f.descripcion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pestaña: Cómo interpretar */}
              {pestañaActiva === "interpretacion" && (
                <div>
                  <p className="glosario-intro">
                    Use esta guía para tomar decisiones a partir de un boletín
                    climático para papa:
                  </p>
                  <div className="glosario-tabla">
                    <div className="glosario-tabla__encabezado">
                      <span>Señal en el boletín</span>
                      <span>Acción recomendada</span>
                    </div>
                    {glosarioData.interpretacion.map((item, i) => (
                      <div key={i} className="glosario-tabla__fila">
                        <span className="glosario-tabla__señal">
                          ⚠ {item.señal}
                        </span>
                        <span className="glosario-tabla__accion">
                          {item.accion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Footer ── */}
            <div className="glosario-modal__footer">
              <button
                type="button"
                className="glosario-modal__btn-cerrar"
                onClick={() => setModalAbierto(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
