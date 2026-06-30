import { useState } from "react";
import "../styles/comp.css";
import DashboardPrecipitacion from "./DashboardPrecipitacion";

// Municipio por defecto — debe coincidir con el primero del array en DashboardClimatico
const MUNICIPIO_DEFAULT = {
  nombre: "El Carmen de Viboral",
  departamento: "Antioquia",
  lat: 6.0849,
  lon: -75.3392,
};

export default function Alerts() {
  const [municipio, setMunicipio] = useState(MUNICIPIO_DEFAULT);
  const [anio, setAnio] = useState("2026");

  return (
    <section id="reportes" className="alerts">
      <div className="container">
        <h2 className="container">BOLETINES Y ALERTAS</h2>
        <p className="dashboard-subtitle">
          Monitoreo climático para productores de papa
        </p>
        <div className="semaforo-info">
          {/* DashboardPrecipitacion recibe el municipio y año seleccionados
            y se actualiza automáticamente cuando cambian. */}
          <DashboardPrecipitacion municipio={municipio} anio={anio} />
        </div>
      </div>
    </section>
  );
}
