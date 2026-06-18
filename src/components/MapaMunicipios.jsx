import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";

// Componente auxiliar que vive DENTRO del MapContainer para poder usar useMap
function MapController({ target }) {
  const map = useMap();

  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lon], 13, { duration: 1.2 });
    }
  }, [target, map]);

  return null;
}

export default function MapaMunicipios({
  municipios,
  onSelectMunicipio,
  anio,
  onAnioChange,
}) {
  const [departamento, setDepartamento] = useState("Todos");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [zoomTarget, setZoomTarget] = useState(null); // 👈 nuevo estado

  const anioActual = new Date().getFullYear();
  const anios = [];
  for (let a = 2026; a <= anioActual + 5; a++) {
    anios.push(a);
  }

  const municipiosFiltrados = municipios.filter((m) => {
    const coincideDepartamento =
      departamento === "Todos" ? true : m.departamento === departamento;
    const coincideMunicipio =
      municipioSeleccionado === "" ? true : m.nombre === municipioSeleccionado;
    return coincideDepartamento && coincideMunicipio;
  });

  // 👇 Cuando solo queda UN municipio visible, hacer zoom a él
  useEffect(() => {
    if (municipiosFiltrados.length === 1) {
      setZoomTarget(municipiosFiltrados[0]);
    } else if (municipioSeleccionado) {
      const found = municipios.find((m) => m.nombre === municipioSeleccionado);
      if (found) setZoomTarget(found);
    } else {
      setZoomTarget(null);
    }
  }, [municipioSeleccionado, municipiosFiltrados.length]);

  return (
    <div className="mapa-wrapper">
      <div className="filtros-mapa">
        {/* AÑO */}
        <select value={anio} onChange={(e) => onAnioChange(e.target.value)}>
          {anios.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        {/* DEPARTAMENTO */}
        <select
          value={departamento}
          onChange={(e) => {
            setDepartamento(e.target.value);
            setMunicipioSeleccionado("");
            setZoomTarget(null);
          }}
        >
          <option value="Todos">Todos los departamentos</option>
          <option value="Antioquia">Antioquia</option>
          <option value="Boyacá">Boyacá</option>
          <option value="Caldas">Caldas</option>
          <option value="Cauca">Cauca</option>
          <option value="Cundinamarca">Cundinamarca</option>
          <option value="Nariño">Nariño</option>
          <option value="Norte de Santander">Norte de Santander</option>
          <option value="Santander">Santander</option>
          <option value="Tolima">Tolima</option>
        </select>

        {/* MUNICIPIOS */}
        <select
          value={municipioSeleccionado}
          onChange={(e) => {
            const nombreMunicipio = e.target.value;
            setMunicipioSeleccionado(nombreMunicipio);
            const municipio = municipios.find((m) => m.nombre === nombreMunicipio);
            if (municipio) {
              onSelectMunicipio(municipio);
              setZoomTarget(municipio); // 👈 dispara el zoom
            } else {
              setZoomTarget(null);
            }
          }}
        >
          <option value="">Seleccionar municipio</option>
          {municipiosFiltrados.map((m) => (
            <option key={`${m.departamento}-${m.nombre}`} value={m.nombre}>
              {m.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* MAPA */}
      <MapContainer
        center={[5.5, -73.5]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 👇 Controlador de zoom, debe estar dentro del MapContainer */}
        <MapController target={zoomTarget} />

        {municipiosFiltrados.map((m) => (
          <CircleMarker
            key={`${m.departamento}-${m.nombre}`}
            center={[m.lat, m.lon]}
            radius={8}
            pathOptions={{
              color: "#4caf50",
              fillColor: "#4caf50",
              fillOpacity: 0.8,
            }}
            eventHandlers={{
              click: () => {
                setMunicipioSeleccionado(m.nombre);
                setZoomTarget(m); // 👈 zoom al hacer clic en el punto
                onSelectMunicipio(m);
              },
            }}
          >
            <Popup>
              <b>{m.nombre}</b>
              <br />
              {m.departamento}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}