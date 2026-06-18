import { useState, useEffect } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import MapaMunicipios from "./MapaMunicipios";

const municipios = [
  // ── ANTIOQUIA ──────────────────────────────────────────────
  {
    nombre: "El Carmen de Viboral",
    departamento: "Antioquia",
    lat: 6.0849,
    lon: -75.3392,
  },
  {
    nombre: "El Peñol",
    departamento: "Antioquia",
    lat: 6.2158,
    lon: -75.2395,
  },
  {
    nombre: "El Santuario",
    departamento: "Antioquia",
    lat: 6.1372,
    lon: -75.2714,
  },
  {
    nombre: "Girardota",
    departamento: "Antioquia",
    lat: 6.3778,
    lon: -75.4447,
  },
  {
    nombre: "La Unión",
    departamento: "Antioquia",
    lat: 5.9747,
    lon: -75.3647,
  },
  {
    nombre: "Marinilla",
    departamento: "Antioquia",
    lat: 6.1757,
    lon: -75.3399,
  },
  {
    nombre: "Medellín",
    departamento: "Antioquia",
    lat: 6.2518,
    lon: -75.5636,
  },
  {
    nombre: "San Vicente Ferrer",
    departamento: "Antioquia",
    lat: 6.2997,
    lon: -75.3388,
  },
  {
    nombre: "Sonsón",
    departamento: "Antioquia",
    lat: 5.7167,
    lon: -75.3,
  },

  // ── BOYACÁ ────────────────────────────────────────────────
  {
    nombre: "Aquitania",
    departamento: "Boyacá",
    lat: 5.5228,
    lon: -72.8879,
  },
  {
    nombre: "Arcabuco",
    departamento: "Boyacá",
    lat: 5.7603,
    lon: -73.4497,
  },
  {
    nombre: "Belén",
    departamento: "Boyacá",
    lat: 6.0228,
    lon: -72.9317,
  },
  {
    nombre: "Boyacá",
    departamento: "Boyacá",
    lat: 5.4608,
    lon: -73.3703,
  },
  {
    nombre: "Cerinza",
    departamento: "Boyacá",
    lat: 5.9283,
    lon: -72.8703,
  },
  {
    nombre: "Chíquiza",
    departamento: "Boyacá",
    lat: 5.5958,
    lon: -73.4803,
  },
  {
    nombre: "Chivatá",
    departamento: "Boyacá",
    lat: 5.5322,
    lon: -73.2953,
  },
  {
    nombre: "Ciénega",
    departamento: "Boyacá",
    lat: 5.4089,
    lon: -73.6592,
  },
  {
    nombre: "Cómbita",
    departamento: "Boyacá",
    lat: 5.6217,
    lon: -73.3419,
  },
  {
    nombre: "Cucaíta",
    departamento: "Boyacá",
    lat: 5.5442,
    lon: -73.4656,
  },
  {
    nombre: "Duitama",
    departamento: "Boyacá",
    lat: 5.8268,
    lon: -73.0269,
  },
  {
    nombre: "Firavitoba",
    departamento: "Boyacá",
    lat: 5.6583,
    lon: -72.9939,
  },
  {
    nombre: "Gachantivá",
    departamento: "Boyacá",
    lat: 5.8417,
    lon: -73.5186,
  },
  {
    nombre: "Gámeza",
    departamento: "Boyacá",
    lat: 5.8092,
    lon: -72.7806,
  },
  {
    nombre: "Iza",
    departamento: "Boyacá",
    lat: 5.6194,
    lon: -72.9853,
  },
  {
    nombre: "Jenesano",
    departamento: "Boyacá",
    lat: 5.3831,
    lon: -73.3706,
  },
  {
    nombre: "Mongua",
    departamento: "Boyacá",
    lat: 5.7242,
    lon: -72.81,
  },
  {
    nombre: "Monguí",
    departamento: "Boyacá",
    lat: 5.7133,
    lon: -72.8367,
  },
  {
    nombre: "Motavita",
    departamento: "Boyacá",
    lat: 5.5831,
    lon: -73.3978,
  },
  {
    nombre: "Nobsa",
    departamento: "Boyacá",
    lat: 5.7678,
    lon: -72.9358,
  },
  {
    nombre: "Nuevo Colón",
    departamento: "Boyacá",
    lat: 5.3583,
    lon: -73.4628,
  },
  {
    nombre: "Oicatá",
    departamento: "Boyacá",
    lat: 5.5978,
    lon: -73.3083,
  },
  {
    nombre: "Paipa",
    departamento: "Boyacá",
    lat: 5.7789,
    lon: -73.1128,
  },
  {
    nombre: "Pesca",
    departamento: "Boyacá",
    lat: 5.5561,
    lon: -72.9192,
  },
  {
    nombre: "Ramiriquí",
    departamento: "Boyacá",
    lat: 5.4053,
    lon: -73.3375,
  },
  {
    nombre: "Saboyá",
    departamento: "Boyacá",
    lat: 5.7017,
    lon: -73.755,
  },
  {
    nombre: "Samacá",
    departamento: "Boyacá",
    lat: 5.4919,
    lon: -73.4889,
  },
  {
    nombre: "Santa Rosa de Viterbo",
    departamento: "Boyacá",
    lat: 5.8783,
    lon: -72.9869,
  },
  {
    nombre: "Siachoque",
    departamento: "Boyacá",
    lat: 5.4733,
    lon: -73.2442,
  },
  {
    nombre: "Sogamoso",
    departamento: "Boyacá",
    lat: 5.7172,
    lon: -72.9354,
  },
  {
    nombre: "Sora",
    departamento: "Boyacá",
    lat: 5.5522,
    lon: -73.4692,
  },
  {
    nombre: "Soracá",
    departamento: "Boyacá",
    lat: 5.5183,
    lon: -73.3383,
  },
  {
    nombre: "Sotaquirá",
    departamento: "Boyacá",
    lat: 5.7425,
    lon: -73.2522,
  },
  {
    nombre: "Tibaná",
    departamento: "Boyacá",
    lat: 5.3208,
    lon: -73.3964,
  },
  {
    nombre: "Tibasosa",
    departamento: "Boyacá",
    lat: 5.7581,
    lon: -73.0069,
  },
  {
    nombre: "Toca",
    departamento: "Boyacá",
    lat: 5.5667,
    lon: -73.1972,
  },
  {
    nombre: "Tota",
    departamento: "Boyacá",
    lat: 5.5567,
    lon: -72.8803,
  },
  {
    nombre: "Tunja",
    departamento: "Boyacá",
    lat: 5.5353,
    lon: -73.3678,
  },
  {
    nombre: "Turmequé",
    departamento: "Boyacá",
    lat: 5.3228,
    lon: -73.4961,
  },
  {
    nombre: "Tuta",
    departamento: "Boyacá",
    lat: 5.6917,
    lon: -73.1942,
  },
  {
    nombre: "Tutazá",
    departamento: "Boyacá",
    lat: 5.9828,
    lon: -72.9631,
  },
  {
    nombre: "Úmbita",
    departamento: "Boyacá",
    lat: 5.2622,
    lon: -73.4386,
  },
  {
    nombre: "Ventaquemada",
    departamento: "Boyacá",
    lat: 5.3697,
    lon: -73.5211,
  },
  {
    nombre: "Viracachá",
    departamento: "Boyacá",
    lat: 5.4422,
    lon: -73.2908,
  },

  // ── CALDAS ────────────────────────────────────────────────
  {
    nombre: "Manizales",
    departamento: "Caldas",
    lat: 5.0703,
    lon: -75.5138,
  },
  {
    nombre: "Marulanda",
    departamento: "Caldas",
    lat: 5.4503,
    lon: -75.1733,
  },

  // ── CAUCA ─────────────────────────────────────────────────

  {
    nombre: "Puracé",
    departamento: "Cauca",
    lat: 2.2533,
    lon: -76.4022,
  },
  {
    nombre: "Silvia",
    departamento: "Cauca",
    lat: 2.6133,
    lon: -76.3744,
  },
  {
    nombre: "Sotará",
    departamento: "Cauca",
    lat: 2.0583,
    lon: -76.5428,
  },
  {
    nombre: "Totoró",
    departamento: "Cauca",
    lat: 2.4808,
    lon: -76.3978,
  },

  // ── CUNDINAMARCA ──────────────────────────────────────────
  {
    nombre: "Arbeláez",
    departamento: "Cundinamarca",
    lat: 4.2717,
    lon: -74.4158,
  },
  {
    nombre: "Bituima",
    departamento: "Cundinamarca",
    lat: 4.8739,
    lon: -74.5406,
  },
  {
    nombre: "Bogotá",
    departamento: "Cundinamarca",
    lat: 4.711,
    lon: -74.0721,
  },
  {
    nombre: "Bojacá",
    departamento: "Cundinamarca",
    lat: 4.7308,
    lon: -74.3444,
  },
  {
    nombre: "Cáqueza",
    departamento: "Cundinamarca",
    lat: 4.4058,
    lon: -73.9461,
  },
  {
    nombre: "Carmen de Carupa",
    departamento: "Cundinamarca",
    lat: 5.3522,
    lon: -73.9008,
  },
  {
    nombre: "Chía",
    departamento: "Cundinamarca",
    lat: 4.8606,
    lon: -74.0592,
  },
  {
    nombre: "Chipaque",
    departamento: "Cundinamarca",
    lat: 4.4433,
    lon: -74.0556,
  },
  {
    nombre: "Chocontá",
    departamento: "Cundinamarca",
    lat: 5.1428,
    lon: -73.6847,
  },
  {
    nombre: "El Rosal",
    departamento: "Cundinamarca",
    lat: 4.8583,
    lon: -74.2608,
  },
  {
    nombre: "Facatativá",
    departamento: "Cundinamarca",
    lat: 4.8175,
    lon: -74.3533,
  },
  {
    nombre: "Funza",
    departamento: "Cundinamarca",
    lat: 4.7178,
    lon: -74.2133,
  },
  {
    nombre: "Fusagasugá",
    departamento: "Cundinamarca",
    lat: 4.3428,
    lon: -74.3636,
  },
  {
    nombre: "Gachancipá",
    departamento: "Cundinamarca",
    lat: 4.9978,
    lon: -73.8739,
  },
  {
    nombre: "Granada",
    departamento: "Cundinamarca",
    lat: 4.5183,
    lon: -74.3558,
  },
  {
    nombre: "Guatavita",
    departamento: "Cundinamarca",
    lat: 4.9342,
    lon: -73.8314,
  },
  {
    nombre: "La Calera",
    departamento: "Cundinamarca",
    lat: 4.9194,
    lon: -73.9711,
  },
  {
    nombre: "Lenguazaque",
    departamento: "Cundinamarca",
    lat: 5.3017,
    lon: -73.7142,
  },
  {
    nombre: "Madrid",
    departamento: "Cundinamarca",
    lat: 4.7344,
    lon: -74.2681,
  },
  {
    nombre: "Mosquera",
    departamento: "Cundinamarca",
    lat: 4.7069,
    lon: -74.23,
  },
  {
    nombre: "Pasca",
    departamento: "Cundinamarca",
    lat: 4.3083,
    lon: -74.2972,
  },
  {
    nombre: "San Bernardo",
    departamento: "Cundinamarca",
    lat: 4.1783,
    lon: -74.4228,
  },
  {
    nombre: "Sesquilé",
    departamento: "Cundinamarca",
    lat: 5.0506,
    lon: -73.7986,
  },
  {
    nombre: "Sibaté",
    departamento: "Cundinamarca",
    lat: 4.4889,
    lon: -74.2594,
  },
  {
    nombre: "Simijaca",
    departamento: "Cundinamarca",
    lat: 5.5194,
    lon: -73.8533,
  },
  {
    nombre: "Soacha",
    departamento: "Cundinamarca",
    lat: 4.5792,
    lon: -74.2178,
  },
  {
    nombre: "Subachoque",
    departamento: "Cundinamarca",
    lat: 4.9267,
    lon: -74.1864,
  },
  {
    nombre: "Suesca",
    departamento: "Cundinamarca",
    lat: 5.1019,
    lon: -73.7983,
  },
  {
    nombre: "Susa",
    departamento: "Cundinamarca",
    lat: 5.4489,
    lon: -73.8578,
  },
  {
    nombre: "Tausa",
    departamento: "Cundinamarca",
    lat: 5.2058,
    lon: -73.8792,
  },
  {
    nombre: "Ubaté",
    departamento: "Cundinamarca",
    lat: 5.3111,
    lon: -73.8178,
  },
  {
    nombre: "Une",
    departamento: "Cundinamarca",
    lat: 4.3939,
    lon: -74.0164,
  },
  {
    nombre: "Villapinzón",
    departamento: "Cundinamarca",
    lat: 5.2133,
    lon: -73.5819,
  },
  {
    nombre: "Zipacón",
    departamento: "Cundinamarca",
    lat: 4.7639,
    lon: -74.3711,
  },
  {
    nombre: "Zipaquirá",
    departamento: "Cundinamarca",
    lat: 5.0231,
    lon: -74.005,
  },

  // ── NARIÑO ────────────────────────────────────────────────
  {
    nombre: "Aldana",
    departamento: "Nariño",
    lat: 0.8733,
    lon: -77.5589,
  },
  {
    nombre: "Contadero",
    departamento: "Nariño",
    lat: 0.9331,
    lon: -77.5006,
  },
  {
    nombre: "Córdoba",
    departamento: "Nariño",
    lat: 1.6203,
    lon: -77.4781,
  },
  {
    nombre: "Cuaspud",
    departamento: "Nariño",
    lat: 0.9028,
    lon: -77.5261,
  },
  {
    nombre: "Cumbal",
    departamento: "Nariño",
    lat: 0.9108,
    lon: -77.7894,
  },
  {
    nombre: "Guachucal",
    departamento: "Nariño",
    lat: 0.9936,
    lon: -77.7033,
  },
  {
    nombre: "Guaitarilla",
    departamento: "Nariño",
    lat: 1.3236,
    lon: -77.5625,
  },
  {
    nombre: "Gualmatán",
    departamento: "Nariño",
    lat: 0.8644,
    lon: -77.6414,
  },
  {
    nombre: "Iles",
    departamento: "Nariño",
    lat: 0.9667,
    lon: -77.5439,
  },
  {
    nombre: "Imués",
    departamento: "Nariño",
    lat: 1.2197,
    lon: -77.6239,
  },
  {
    nombre: "Ipiales",
    departamento: "Nariño",
    lat: 0.8281,
    lon: -77.6442,
  },
  {
    nombre: "Ospina",
    departamento: "Nariño",
    lat: 1.0317,
    lon: -77.5708,
  },
  {
    nombre: "Pasto",
    departamento: "Nariño",
    lat: 1.2136,
    lon: -77.2811,
  },
  {
    nombre: "Potosí",
    departamento: "Nariño",
    lat: 0.8489,
    lon: -77.5736,
  },
  {
    nombre: "Puerres",
    departamento: "Nariño",
    lat: 0.8961,
    lon: -77.5039,
  },
  {
    nombre: "Pupiales",
    departamento: "Nariño",
    lat: 0.8767,
    lon: -77.6911,
  },
  {
    nombre: "Samaniego",
    departamento: "Nariño",
    lat: 1.3378,
    lon: -77.5964,
  },
  {
    nombre: "Sapuyes",
    departamento: "Nariño",
    lat: 1.0606,
    lon: -77.6633,
  },
  {
    nombre: "Tangua",
    departamento: "Nariño",
    lat: 1.1167,
    lon: -77.3628,
  },
  {
    nombre: "Túquerres",
    departamento: "Nariño",
    lat: 1.0886,
    lon: -77.6208,
  },
  {
    nombre: "Yacuanquer",
    departamento: "Nariño",
    lat: 1.1667,
    lon: -77.3961,
  },

  // ── NORTE DE SANTANDER ────────────────────────────────────
  // "CHITAGA" / "CHITAGÁ" → Chitagá
  {
    nombre: "Cácota",
    departamento: "Norte de Santander",
    lat: 7.2006,
    lon: -72.6522,
  },
  {
    nombre: "Chitagá",
    departamento: "Norte de Santander",
    lat: 7.1017,
    lon: -72.6536,
  },
  {
    nombre: "Mutiscua",
    departamento: "Norte de Santander",
    lat: 7.2822,
    lon: -72.8011,
  },
  {
    nombre: "Pamplona",
    departamento: "Norte de Santander",
    lat: 7.3786,
    lon: -72.6489,
  },
  {
    nombre: "Santo Domingo de Silos",
    departamento: "Norte de Santander",
    lat: 6.7008,
    lon: -72.8628,
  },
  {
    nombre: "Carcasí",
    departamento: "Santander",
    lat: 6.6572,
    lon: -72.7006,
  },
  {
    nombre: "Cerrito",
    departamento: "Santander",
    lat: 7.3994,
    lon: -72.705,
  },
  {
    nombre: "Chitagá",
    departamento: "Santander",
    lat: 6.8378,
    lon: -72.6928,
  },
  {
    nombre: "Concepción",
    departamento: "Santander",
    lat: 6.6358,
    lon: -72.8564,
  },
  {
    nombre: "Guaca",
    departamento: "Santander",
    lat: 6.9922,
    lon: -72.8522,
  },
  {
    nombre: "San Andrés",
    departamento: "Santander",
    lat: 6.5922,
    lon: -72.8939,
  },
  {
    nombre: "Silos",
    departamento: "Santander",
    lat: 6.8119,
    lon: -72.6917,
  },
  {
    nombre: "Tona",
    departamento: "Santander",
    lat: 7.1506,
    lon: -72.9428,
  },

  // ── TOLIMA ────────────────────────────────────────────────
  {
    nombre: "Herveo",
    departamento: "Tolima",
    lat: 5.1583,
    lon: -75.1722,
  },
  {
    nombre: "Murillo",
    departamento: "Tolima",
    lat: 4.8703,
    lon: -75.1914,
  },
  {
    nombre: "Santa Isabel",
    departamento: "Tolima",
    lat: 4.7397,
    lon: -75.3242,
  },
];

export default function DashboardClimatico() {
  const [municipio, setMunicipio] = useState(municipios[0]);

  const [mes, setMes] = useState("01");
  const [anio, setAnio] = useState("2026");

  const [data, setData] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, [municipio, mes, anio]);
  const cargarDatos = async () => {
    try {
      const inicio = `${anio}-${mes}-01`;
      const ultimoDia = new Date(parseInt(anio), parseInt(mes), 0).getDate();
      const fin = `${anio}-${mes}-${String(ultimoDia).padStart(2, "0")}`;
      const hoy = new Date().toISOString().split("T")[0];

      // Si el mes aún no terminó, solo pedimos hasta hoy
      const finEfectivo = fin > hoy ? hoy : fin;

      // Si el inicio es futuro, no hay nada que mostrar
      if (inicio > hoy) {
        setData([]);
        return;
      }

      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${municipio.lat}&longitude=${municipio.lon}&start_date=${inicio}&end_date=${finEfectivo}&daily=temperature_2m_mean,precipitation_sum,wind_speed_10m_max,relative_humidity_2m_mean&timezone=America/Bogota`;

      const resp = await fetch(url);
      const json = await resp.json();

      if (!json.daily) {
        setData([]);
        return;
      }

      const datos = json.daily.time.map((fecha, i) => ({
        fecha,
        temperatura: json.daily.temperature_2m_mean?.[i] || 0,
        lluvia: json.daily.precipitation_sum?.[i] || 0,
        humedad: json.daily.relative_humidity_2m_mean?.[i] || 0,
        viento: json.daily.wind_speed_10m_max?.[i] || 0,
      }));

      setData(datos);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // RESUMEN CLIMÁTICO
  // ==========================

  const temperaturaPromedio = (
    data.reduce((a, b) => a + b.temperatura, 0) / (data.length || 1)
  ).toFixed(1);

  const lluviaTotal = data.reduce((a, b) => a + b.lluvia, 0).toFixed(1);

  const humedadPromedio = (
    data.reduce((a, b) => a + b.humedad, 0) / (data.length || 1)
  ).toFixed(1);

  const vientoPromedio = (
    data.reduce((a, b) => a + b.viento, 0) / (data.length || 1)
  ).toFixed(1);

  const colorSemaforo =
    lluviaTotal > 200
      ? "rojo"
      : lluviaTotal > 150
        ? "naranja"
        : lluviaTotal > 100
          ? "amarillo"
          : "verde";

  // Estado para guardar el promedio anual de temperatura
  const [promedioAnual, setPromedioAnual] = useState(null);

  // Cargar promedios de todos los meses del año para comparar
  useEffect(() => {
    calcularPromedioAnual();
  }, [municipio, anio]);

  const calcularPromedioAnual = async () => {
    try {
      // Trae todos los datos del año completo en una sola llamada
      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${municipio.lat}&longitude=${municipio.lon}&start_date=${anio}-01-01&end_date=${anio}-12-31&daily=temperature_2m_mean&timezone=America/Bogota`;

      const resp = await fetch(url);
      const json = await resp.json();

      if (!json.daily?.temperature_2m_mean) return;

      const temps = json.daily.temperature_2m_mean.filter((t) => t !== null);
      const promedio = temps.reduce((a, b) => a + b, 0) / temps.length;
      setPromedioAnual(parseFloat(promedio.toFixed(1)));
    } catch (error) {
      console.error(error);
    }
  };

  // Semáforo de temperatura — desviación vs promedio anual
  const desviacionTemp =
    promedioAnual !== null
      ? parseFloat(temperaturaPromedio) - promedioAnual
      : 0;

  const colorSemaforoTemp =
    desviacionTemp > 3
      ? "rojo" // Más de 3°C sobre el promedio anual
      : desviacionTemp > 1.5
        ? "naranja" // Entre 1.5°C y 3°C sobre el promedio
        : desviacionTemp > 0
          ? "amarillo" // Ligeramente por encima
          : "verde"; // Normal o por debajo del promedio

  return (
    <>
      <MapaMunicipios
        municipios={municipios}
        onSelectMunicipio={setMunicipio}
        anio={anio}
        onAnioChange={setAnio}
      />

      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <h3>Dashboard Climático Diario</h3>

            <p>
              {municipio.nombre} - {municipio.departamento}
            </p>
          </div>

          <select value={mes} onChange={(e) => setMes(e.target.value)}>
            <option value="01">Enero</option>
            <option value="02">Febrero</option>
            <option value="03">Marzo</option>
            <option value="04">Abril</option>
            <option value="05">Mayo</option>
            <option value="06">Junio</option>
            <option value="07">Julio</option>
            <option value="08">Agosto</option>
            <option value="09">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>

        {/* RESUMEN */}

        <div className="resumen-clima">
          <div className="clima-box">
            <span>🌡️</span>
            <h4>{temperaturaPromedio} °C</h4>
            <p>Temperatura</p>
          </div>

          <div className="clima-box">
            <span>🌧️</span>
            <h4>{lluviaTotal}</h4>
            <p>mm lluvia</p>
          </div>

          <div className="clima-box">
            <span>💧</span>
            <h4>{humedadPromedio}%</h4>
            <p>Humedad</p>
          </div>

          <div className="clima-box">
            <span>💨</span>
            <h4>{vientoPromedio}</h4>
            <p>km/h</p>
          </div>

          <div className={`clima-box semaforo-${colorSemaforo}`}>
            <span>🚨</span>
            <h4>{colorSemaforo.toUpperCase()}</h4>
            <p>Riesgo Climático</p>
          </div>
          <div className={`clima-box semaforo-${colorSemaforoTemp}`}>
            <span>🌡️</span>
            <h4>{colorSemaforoTemp.toUpperCase()}</h4>
            <p>Riesgo Temperatura</p>
            {promedioAnual !== null && (
              <small>
                {desviacionTemp > 0 ? "+" : ""}
                {desviacionTemp.toFixed(1)}°C vs promedio anual ({promedioAnual}
                °C)
              </small>
            )}
          </div>
        </div>

        {/* GRÁFICA */}

        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="fecha" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="temperatura"
              name="Temperatura °C"
              stroke="#ff9800"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="lluvia"
              name="Precipitación mm"
              stroke="#4fc3f7"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="humedad"
              name="Humedad %"
              stroke="#4caf50"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="viento"
              name="Viento km/h"
              stroke="#9c27b0"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
