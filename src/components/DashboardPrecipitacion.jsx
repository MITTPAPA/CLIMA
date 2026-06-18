import { useState, useEffect, useMemo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const municipios = [
  {
    nombre: "El Carmen de Viboral",
    departamento: "Antioquia",
    lat: 6.0849,
    lon: -75.3392,
  },
  { nombre: "El Peñol", departamento: "Antioquia", lat: 6.2158, lon: -75.2395 },
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
  { nombre: "La Unión", departamento: "Antioquia", lat: 5.9747, lon: -75.3647 },
  {
    nombre: "Marinilla",
    departamento: "Antioquia",
    lat: 6.1757,
    lon: -75.3399,
  },
  { nombre: "Medellín", departamento: "Antioquia", lat: 6.2518, lon: -75.5636 },
  {
    nombre: "San Vicente Ferrer",
    departamento: "Antioquia",
    lat: 6.2997,
    lon: -75.3388,
  },
  { nombre: "Sonsón", departamento: "Antioquia", lat: 5.7167, lon: -75.3 },
  { nombre: "Aquitania", departamento: "Boyacá", lat: 5.5228, lon: -72.8879 },
  { nombre: "Arcabuco", departamento: "Boyacá", lat: 5.7603, lon: -73.4497 },
  { nombre: "Belén", departamento: "Boyacá", lat: 6.0228, lon: -72.9317 },
  { nombre: "Boyacá", departamento: "Boyacá", lat: 5.4608, lon: -73.3703 },
  { nombre: "Cerinza", departamento: "Boyacá", lat: 5.9283, lon: -72.8703 },
  { nombre: "Chíquiza", departamento: "Boyacá", lat: 5.5958, lon: -73.4803 },
  { nombre: "Chivatá", departamento: "Boyacá", lat: 5.5322, lon: -73.2953 },
  { nombre: "Ciénega", departamento: "Boyacá", lat: 5.4089, lon: -73.6592 },
  { nombre: "Cómbita", departamento: "Boyacá", lat: 5.6217, lon: -73.3419 },
  { nombre: "Cucaíta", departamento: "Boyacá", lat: 5.5442, lon: -73.4656 },
  { nombre: "Duitama", departamento: "Boyacá", lat: 5.8268, lon: -73.0269 },
  { nombre: "Firavitoba", departamento: "Boyacá", lat: 5.6583, lon: -72.9939 },
  { nombre: "Gachantivá", departamento: "Boyacá", lat: 5.8417, lon: -73.5186 },
  { nombre: "Gámeza", departamento: "Boyacá", lat: 5.8092, lon: -72.7806 },
  { nombre: "Iza", departamento: "Boyacá", lat: 5.6194, lon: -72.9853 },
  { nombre: "Jenesano", departamento: "Boyacá", lat: 5.3831, lon: -73.3706 },
  { nombre: "Mongua", departamento: "Boyacá", lat: 5.7242, lon: -72.81 },
  { nombre: "Monguí", departamento: "Boyacá", lat: 5.7133, lon: -72.8367 },
  { nombre: "Motavita", departamento: "Boyacá", lat: 5.5831, lon: -73.3978 },
  { nombre: "Nobsa", departamento: "Boyacá", lat: 5.7678, lon: -72.9358 },
  { nombre: "Nuevo Colón", departamento: "Boyacá", lat: 5.3583, lon: -73.4628 },
  { nombre: "Oicatá", departamento: "Boyacá", lat: 5.5978, lon: -73.3083 },
  { nombre: "Paipa", departamento: "Boyacá", lat: 5.7789, lon: -73.1128 },
  { nombre: "Pesca", departamento: "Boyacá", lat: 5.5561, lon: -72.9192 },
  { nombre: "Ramiriquí", departamento: "Boyacá", lat: 5.4053, lon: -73.3375 },
  { nombre: "Saboyá", departamento: "Boyacá", lat: 5.7017, lon: -73.755 },
  { nombre: "Samacá", departamento: "Boyacá", lat: 5.4919, lon: -73.4889 },
  {
    nombre: "Santa Rosa de Viterbo",
    departamento: "Boyacá",
    lat: 5.8783,
    lon: -72.9869,
  },
  { nombre: "Siachoque", departamento: "Boyacá", lat: 5.4733, lon: -73.2442 },
  { nombre: "Sogamoso", departamento: "Boyacá", lat: 5.7172, lon: -72.9354 },
  { nombre: "Sora", departamento: "Boyacá", lat: 5.5522, lon: -73.4692 },
  { nombre: "Soracá", departamento: "Boyacá", lat: 5.5183, lon: -73.3383 },
  { nombre: "Sotaquirá", departamento: "Boyacá", lat: 5.7425, lon: -73.2522 },
  { nombre: "Tibaná", departamento: "Boyacá", lat: 5.3208, lon: -73.3964 },
  { nombre: "Tibasosa", departamento: "Boyacá", lat: 5.7581, lon: -73.0069 },
  { nombre: "Toca", departamento: "Boyacá", lat: 5.5667, lon: -73.1972 },
  { nombre: "Tota", departamento: "Boyacá", lat: 5.5567, lon: -72.8803 },
  { nombre: "Tunja", departamento: "Boyacá", lat: 5.5353, lon: -73.3678 },
  { nombre: "Turmequé", departamento: "Boyacá", lat: 5.3228, lon: -73.4961 },
  { nombre: "Tuta", departamento: "Boyacá", lat: 5.6917, lon: -73.1942 },
  { nombre: "Tutazá", departamento: "Boyacá", lat: 5.9828, lon: -72.9631 },
  { nombre: "Úmbita", departamento: "Boyacá", lat: 5.2622, lon: -73.4386 },
  {
    nombre: "Ventaquemada",
    departamento: "Boyacá",
    lat: 5.3697,
    lon: -73.5211,
  },
  { nombre: "Viracachá", departamento: "Boyacá", lat: 5.4422, lon: -73.2908 },
  { nombre: "Manizales", departamento: "Caldas", lat: 5.0703, lon: -75.5138 },
  { nombre: "Marulanda", departamento: "Caldas", lat: 5.4503, lon: -75.1733 },
  { nombre: "Puracé", departamento: "Cauca", lat: 2.2533, lon: -76.4022 },
  { nombre: "Silvia", departamento: "Cauca", lat: 2.6133, lon: -76.3744 },
  { nombre: "Sotará", departamento: "Cauca", lat: 2.0583, lon: -76.5428 },
  { nombre: "Totoró", departamento: "Cauca", lat: 2.4808, lon: -76.3978 },
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
  { nombre: "Bogotá", departamento: "Cundinamarca", lat: 4.711, lon: -74.0721 },
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
  { nombre: "Chía", departamento: "Cundinamarca", lat: 4.8606, lon: -74.0592 },
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
  { nombre: "Funza", departamento: "Cundinamarca", lat: 4.7178, lon: -74.2133 },
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
  { nombre: "Pasca", departamento: "Cundinamarca", lat: 4.3083, lon: -74.2972 },
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
  { nombre: "Susa", departamento: "Cundinamarca", lat: 5.4489, lon: -73.8578 },
  { nombre: "Tausa", departamento: "Cundinamarca", lat: 5.2058, lon: -73.8792 },
  { nombre: "Ubaté", departamento: "Cundinamarca", lat: 5.3111, lon: -73.8178 },
  { nombre: "Une", departamento: "Cundinamarca", lat: 4.3939, lon: -74.0164 },
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
  { nombre: "Aldana", departamento: "Nariño", lat: 0.8733, lon: -77.5589 },
  { nombre: "Contadero", departamento: "Nariño", lat: 0.9331, lon: -77.5006 },
  { nombre: "Córdoba", departamento: "Nariño", lat: 1.6203, lon: -77.4781 },
  { nombre: "Cuaspud", departamento: "Nariño", lat: 0.9028, lon: -77.5261 },
  { nombre: "Cumbal", departamento: "Nariño", lat: 0.9108, lon: -77.7894 },
  { nombre: "Guachucal", departamento: "Nariño", lat: 0.9936, lon: -77.7033 },
  { nombre: "Guaitarilla", departamento: "Nariño", lat: 1.3236, lon: -77.5625 },
  { nombre: "Gualmatán", departamento: "Nariño", lat: 0.8644, lon: -77.6414 },
  { nombre: "Iles", departamento: "Nariño", lat: 0.9667, lon: -77.5439 },
  { nombre: "Imués", departamento: "Nariño", lat: 1.2197, lon: -77.6239 },
  { nombre: "Ipiales", departamento: "Nariño", lat: 0.8281, lon: -77.6442 },
  { nombre: "Ospina", departamento: "Nariño", lat: 1.0317, lon: -77.5708 },
  { nombre: "Pasto", departamento: "Nariño", lat: 1.2136, lon: -77.2811 },
  { nombre: "Potosí", departamento: "Nariño", lat: 0.8489, lon: -77.5736 },
  { nombre: "Puerres", departamento: "Nariño", lat: 0.8961, lon: -77.5039 },
  { nombre: "Pupiales", departamento: "Nariño", lat: 0.8767, lon: -77.6911 },
  { nombre: "Samaniego", departamento: "Nariño", lat: 1.3378, lon: -77.5964 },
  { nombre: "Sapuyes", departamento: "Nariño", lat: 1.0606, lon: -77.6633 },
  { nombre: "Tangua", departamento: "Nariño", lat: 1.1167, lon: -77.3628 },
  { nombre: "Túquerres", departamento: "Nariño", lat: 1.0886, lon: -77.6208 },
  { nombre: "Yacuanquer", departamento: "Nariño", lat: 1.1667, lon: -77.3961 },
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
  { nombre: "Carcasí", departamento: "Santander", lat: 6.6572, lon: -72.7006 },
  { nombre: "Cerrito", departamento: "Santander", lat: 7.3994, lon: -72.705 },
  { nombre: "Chitagá", departamento: "Santander", lat: 6.8378, lon: -72.6928 },
  {
    nombre: "Concepción",
    departamento: "Santander",
    lat: 6.6358,
    lon: -72.8564,
  },
  { nombre: "Guaca", departamento: "Santander", lat: 6.9922, lon: -72.8522 },
  {
    nombre: "San Andrés",
    departamento: "Santander",
    lat: 6.5922,
    lon: -72.8939,
  },
  { nombre: "Silos", departamento: "Santander", lat: 6.8119, lon: -72.6917 },
  { nombre: "Tona", departamento: "Santander", lat: 7.1506, lon: -72.9428 },
  { nombre: "Herveo", departamento: "Tolima", lat: 5.1583, lon: -75.1722 },
  { nombre: "Murillo", departamento: "Tolima", lat: 4.8703, lon: -75.1914 },
  {
    nombre: "Santa Isabel",
    departamento: "Tolima",
    lat: 4.7397,
    lon: -75.3242,
  },
];

const PREC_REFERENCIA = [
  { mes: "01", nombre: "Enero", prec: 40.638508 },
  { mes: "02", nombre: "Febrero", prec: 52.221184 },
  { mes: "03", nombre: "Marzo", prec: 92.908035 },
  { mes: "04", nombre: "Abril", prec: 122.311646 },
  { mes: "05", nombre: "Mayo", prec: 116.663727 },
  { mes: "06", nombre: "Junio", prec: 92.442024 },
  { mes: "07", nombre: "Julio", prec: 90.16201 },
  { mes: "08", nombre: "Agosto", prec: 80.512978 },
  { mes: "09", nombre: "Septiembre", prec: 72.455231 },
  { mes: "10", nombre: "Octubre", prec: 106.066177 },
  { mes: "11", nombre: "Noviembre", prec: 109.301735 },
  { mes: "12", nombre: "Diciembre", prec: 67.327415 },
];

function clasificar(pct) {
  if (pct >= -5 && pct <= 5) return "normal";
  if (pct >= -15 && pct <= -6) return "deficit_leve";
  if (pct <= -16) return "deficit_severo";
  if (pct >= 6 && pct <= 15) return "exceso_leve";
  return "exceso_severo";
}

const SEMAFORO = {
  normal: {
    color: "#166534",
    bg: "#f0fdf4",
    borde: "#86efac",
    badgeBg: "#16a34a",
    etiqueta: "✅ Normal",
    texto: "Precipitación dentro de la media esperada",
  },
  deficit_leve: {
    color: "#92400e",
    bg: "#fffbeb",
    borde: "#fcd34d",
    badgeBg: "#d97706",
    etiqueta: "⚠️ Déficit leve",
    texto: "Leve déficit de lluvia respecto a la media histórica",
  },
  deficit_severo: {
    color: "#7f1d1d",
    bg: "#fff1f2",
    borde: "#fca5a5",
    badgeBg: "#dc2626",
    etiqueta: "🚨 Déficit severo",
    texto: "Déficit severo de lluvia — riesgo de estrés hídrico",
  },
  exceso_leve: {
    color: "#581c87",
    bg: "#faf5ff",
    borde: "#d8b4fe",
    badgeBg: "#9333ea",
    etiqueta: "🟣 Exceso leve",
    texto: "Leve exceso de lluvia respecto a la media histórica",
  },
  exceso_severo: {
    color: "#1e3a8a",
    bg: "#eff6ff",
    borde: "#93c5fd",
    badgeBg: "#2563eb",
    etiqueta: "🌧️ Exceso severo",
    texto: "Exceso severo de lluvia — riesgo de encharcamiento",
  },
};

const DOT_ICONOS = {
  normal: "🟢",
  deficit_leve: "🟡",
  deficit_severo: "🔴",
  exceso_leve: "🟣",
  exceso_severo: "🔵",
};

const BANNER_ICONOS = {
  normal: "✅",
  deficit_leve: "⚠️",
  deficit_severo: "🚨",
  exceso_leve: "🟣",
  exceso_severo: "🌧️",
};

const MODAL_CONTENIDO = {
  normal: {
    titulo: "Condiciones Favorables",
    subtitulo: "Ambiente óptimo para el desarrollo del cultivo",
    icono: "✅",
    secciones: [
      {
        icono: "☀️",
        titulo: "Clima",
        items: [
          "Clima estable y adecuado para el cultivo de papa",
          "Temperaturas dentro del rango óptimo (10–18 °C)",
          "Precipitación equilibrada sin excesos ni déficits",
        ],
      },
      {
        icono: "🌱",
        titulo: "Siembra y labores",
        items: [
          "Buen momento para preparar suelos y sembrar",
          "Condiciones ideales para aplicar fertilizantes al suelo",
          "Aprovecha para avanzar en labores de aporque y deshierba",
        ],
      },
      {
        icono: "🚜",
        titulo: "Manejo agronómico",
        items: [
          "Aplica fungicidas preventivos mientras el clima lo permita",
          "Realiza monitoreo rutinario de plagas y enfermedades",
          "Programa riegos de mantenimiento si es necesario",
        ],
      },
      {
        icono: "📦",
        titulo: "Cosecha y poscosecha",
        items: [
          "Momento propicio para cosechar si el cultivo está maduro",
          "Condiciones favorables para el secado y almacenamiento",
          "Evalúa calidad del tubérculo antes de comercializar",
        ],
      },
    ],
    consejo:
      "Aprovecha estas condiciones para avanzar en todas las labores del cultivo. Infórmate, planifica y toma mejores decisiones para una papa sana y productiva.",
  },
  deficit_leve: {
    titulo: "Déficit Leve de Lluvia",
    subtitulo:
      "Precipitación algo por debajo de la media — vigila la humedad del suelo",
    icono: "⚠️",
    secciones: [
      {
        icono: "🌤️",
        titulo: "Clima",
        items: [
          "Precipitación entre 6% y 15% por debajo de la media histórica",
          "Posible alargamiento de los períodos secos entre lluvias",
          "Monitorea la humedad del suelo en las primeras horas del día",
        ],
      },
      {
        icono: "💧",
        titulo: "Manejo del agua",
        items: [
          "Evalúa riego de apoyo en lotes sin humedad residual suficiente",
          "Prioriza el riego en etapas críticas: tuberización y llenado",
          "Considera coberturas o mulch para conservar humedad del suelo",
        ],
      },
      {
        icono: "🔍",
        titulo: "Monitoreo del cultivo",
        items: [
          "Revisa signos de marchitez temprana en horas de mayor calor",
          "Observa el desarrollo radicular y la formación de tubérculos",
          "Lleva registro diario de las precipitaciones en finca",
        ],
      },
      {
        icono: "🗓️",
        titulo: "Planificación",
        items: [
          "Ajusta el calendario de fertilización según disponibilidad de agua",
          "Ten previsto un plan de riego de contingencia",
          "Consulta con tu asistente técnico antes de decisiones clave",
        ],
      },
    ],
    consejo:
      "Un déficit leve no es crítico, pero amerita seguimiento cercano. Anticípate revisando el estado hídrico del suelo y ajustando el riego donde sea posible.",
  },
  deficit_severo: {
    titulo: "Déficit Severo de Lluvia",
    subtitulo: "Escasez hídrica crítica — riesgo alto de estrés en el cultivo",
    icono: "🚨",
    secciones: [
      {
        icono: "🔥",
        titulo: "Riesgos climáticos",
        items: [
          "Precipitación 16% o más por debajo de la media histórica",
          "Alto riesgo de estrés hídrico en floración y tuberización",
          "Suelos secos favorecen la compactación y dificultan la absorción de nutrientes",
        ],
      },
      {
        icono: "🪲",
        titulo: "Plagas y enfermedades",
        items: [
          "Condiciones secas favorecen la proliferación de polilla guatemalteca",
          "Mayor susceptibilidad del cultivo ante ácaros y trips",
          "Reduce aplicaciones foliares innecesarias para no estresar la planta",
        ],
      },
      {
        icono: "💧",
        titulo: "Manejo del agua",
        items: [
          "Prioriza el riego disponible hacia las etapas más sensibles del cultivo",
          "Evita el aporque en suelo extremadamente seco — daña raíces y estolones",
          "Considera riego nocturno o de madrugada para reducir la evaporación",
        ],
      },
      {
        icono: "🆘",
        titulo: "Acciones urgentes",
        items: [
          "Activa sistemas de riego de emergencia si están disponibles",
          "Documenta el estado del cultivo para gestión de seguros agropecuarios",
          "Contacta a FEDEPAPA y a tu asistente técnico para evaluar alternativas",
        ],
      },
    ],
    consejo:
      "Un déficit severo puede comprometer seriamente el rendimiento. Prioriza el agua disponible hacia las etapas críticas y busca asesoría técnica oportuna.",
  },
  exceso_leve: {
    titulo: "Exceso Leve de Lluvia",
    subtitulo:
      "Precipitación algo por encima de la media — mantente atento a la humedad",
    icono: "🟣",
    secciones: [
      {
        icono: "🌦️",
        titulo: "Clima",
        items: [
          "Precipitación entre 6% y 15% por encima de la media histórica",
          "Mayor humedad relativa y suelos con menor capacidad de drenaje",
          "Revisa el pronóstico para anticipar lluvias consecutivas",
        ],
      },
      {
        icono: "🔍",
        titulo: "Monitoreo del cultivo",
        items: [
          "Inspecciona el follaje en busca de manchas húmedas o lesiones iniciales",
          "Verifica que los surcos mantengan buen drenaje superficial",
          "Observa el color y firmeza del follaje ante el exceso de humedad",
        ],
      },
      {
        icono: "⚗️",
        titulo: "Aplicaciones con precaución",
        items: [
          "Prefiere fungicidas preventivos ante el riesgo creciente de gota",
          "Evita la fertilización foliar si se esperan lluvias en las próximas horas",
          "Espacia las aplicaciones según las ventanas climáticas más secas",
        ],
      },
      {
        icono: "🗓️",
        titulo: "Planificación",
        items: [
          "Revisa y despeja canales de drenaje antes de lluvias adicionales",
          "Ajusta las labores de campo a los días con menor humedad",
          "Consulta con tu asistente técnico si el exceso se prolonga",
        ],
      },
    ],
    consejo:
      "Un exceso leve de lluvia exige vigilancia preventiva. Refuerza el drenaje y prioriza los fungicidas preventivos para evitar que el problema escale.",
  },
  exceso_severo: {
    titulo: "Exceso Severo de Lluvia",
    subtitulo:
      "Lluvias muy por encima de lo normal — riesgo de encharcamiento y pudrición",
    icono: "🌧️",
    secciones: [
      {
        icono: "🌨️",
        titulo: "Riesgos climáticos",
        items: [
          "Precipitación más de 15% por encima de la media histórica",
          "Alta probabilidad de encharcamiento y saturación del suelo",
          "Granizo posible en zonas de ladera — protege los cultivos jóvenes",
        ],
      },
      {
        icono: "🪲",
        titulo: "Plagas y enfermedades",
        items: [
          "Alta humedad: riesgo crítico de gota (Phytophthora infestans)",
          "Mayor probabilidad de pudrición radicular y de tubérculos",
          "Evita aplicaciones foliares — baja eficacia y riesgo de lavado por lluvia",
        ],
      },
      {
        icono: "🚫",
        titulo: "Labores a evitar",
        items: [
          "Evita siembras nuevas hasta que el suelo drene adecuadamente",
          "Suspende el aporque y el tránsito de maquinaria en suelos saturados",
          "No apliques fertilizantes al suelo mientras persista el encharcamiento",
        ],
      },
      {
        icono: "🆘",
        titulo: "Acciones urgentes",
        items: [
          "Activa o revisa sistemas de drenaje y canales de desfogue",
          "Documenta daños para gestión de seguros agropecuarios",
          "Contacta de inmediato a FEDEPAPA y autoridades locales",
        ],
      },
    ],
    consejo:
      "El exceso severo de lluvia puede comprometer la cosecha por pudrición y enfermedades. Refuerza el drenaje y actúa rápido para minimizar pérdidas.",
  },
};

/* ── ESTILOS GLOBALES ─────────────────────────────── */
const GLOBAL_CSS = `
  :root {
    --brand: #004776;
    --brand-dark: #003358;
    --brand-light: #e8f1f8;
    --brand-mid: #cce0ef;
    --surface: #ffffff;
    --bg: #f4f7fb;
    --border: #e2e8f0;
    --text-main: #0f172a;
    --text-sub: #475569;
    --text-hint: #94a3b8;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 18px;
    --radius-xl: 24px;
    --shadow-sm: 0 1px 4px rgba(0,71,118,0.06);
    --shadow-md: 0 4px 16px rgba(0,71,118,0.10);
    --shadow-lg: 0 8px 32px rgba(0,71,118,0.13);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .dp-wrap {
    background: var(--bg);
    border-radius: var(--radius-xl);
    border: 1px solid var(--border);
    overflow: hidden;
    font-family: inherit;
    font-size: 16px;
    color: var(--text-main);
  }

  /* ── HEADER ── */
  .dp-header {
    background: var(--brand);
    padding: 24px 28px 20px;
  }
  .dp-header-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }
  .dp-title-block h2 {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.3px;
    line-height: 1.2;
  }
  .dp-title-block p {
    font-size: 16px;
    color: rgba(255,255,255,0.65);
    margin-top: 4px;
  }
  .dp-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-end;
  }
  .dp-filter-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .dp-filter-label {
    font-size: 14px;
    font-weight: 700;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .dp-select {
    padding: 8px 12px;
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: var(--radius-sm);
    font-size: 16px;
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    outline: none;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    min-width: 130px;
  }
  .dp-select option { background: var(--brand-dark); color: #fff; }
  .dp-select:focus { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.18); }
  .dp-btn-update {
    padding: 9px 18px;
    background: #b5e61d;
    color: var(--brand-dark);
    border: none;
    border-radius: var(--radius-sm);
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
    white-space: nowrap;
    align-self: flex-end;
  }
  .dp-btn-update:hover { opacity: 0.88; }
  .dp-btn-update:active { transform: scale(0.97); }
  .dp-btn-update:disabled { opacity: 0.55; cursor: not-allowed; }

  /* ubicación pill */
  .dp-location-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 13px;
    color: rgba(255,255,255,0.85);
  }
  .dp-location-pill b { color: #ffffff; }

  /* ── BODY ── */
  .dp-body { padding: 24px 28px; font-size: 16px; }

  /* ── ERROR ── */
  .dp-error {
    background: #fff1f2;
    border: 1px solid #fca5a5;
    border-radius: var(--radius-md);
    padding: 12px 16px;
    color: #7f1d1d;
    font-size: 14px;
    margin-bottom: 20px;
  }

  /* ── SPINNER ── */
  @keyframes dp-spin { to { transform: rotate(360deg); } }
  .dp-spinner-wrap { text-align: center; padding: 52px 0; color: var(--text-sub); font-size: 16px; }
  .dp-spinner { width: 38px; height: 38px; border: 3px solid var(--border); border-top: 3px solid var(--brand); border-radius: 50%; animation: dp-spin 0.8s linear infinite; margin: 0 auto 14px; }

  /* ── KPI CARDS ── */
  .dp-kpis {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    margin-bottom: 18px;
  }
  .dp-kpi {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 18px 20px;
    transition: box-shadow 0.2s;
  }
  .dp-kpi:hover { box-shadow: var(--shadow-md); }
  .dp-kpi-icon { font-size: 22px; margin-bottom: 10px; display: block; }
  .dp-kpi-value { font-size: 22px; font-weight: 800; color: var(--brand); line-height: 1; margin-bottom: 5px; }
  .dp-kpi-label { font-size: 12px; color: var(--text-hint); font-weight: 500; text-transform: uppercase; letter-spacing: 0.04em; }
  .dp-kpi-semaforo {
    cursor: pointer;
    position: relative;
  }
  .dp-kpi-semaforo:hover { transform: translateY(-2px); }
  @keyframes dp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(1.6)} }
  .dp-pulse { display: inline-block; width: 8px; height: 8px; border-radius: 50%; animation: dp-pulse 2s infinite; position: absolute; top: 14px; right: 14px; }
  .dp-kpi-hint { font-size: 11px; color: var(--text-hint); margin-top: 6px; }

  /* ── BANNER ── */
  .dp-banner {
    border-radius: var(--radius-md);
    padding: 14px 18px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    transition: opacity 0.15s;
    border: 1px solid transparent;
  }
  .dp-banner:hover { opacity: 0.88; }
  .dp-banner-icon { font-size: 22px; flex-shrink: 0; }
  .dp-banner-body { flex: 1; }
  .dp-banner-body strong { font-size: 16px; font-weight: 700; display: block; margin-bottom: 2px; }
  .dp-banner-body span { font-size: 14px; }
  .dp-banner-cta { font-size: 13px; white-space: nowrap; opacity: 0.7; }

  /* ── VISTA TABS ── */
  .dp-tabs {
    display: flex;
    gap: 4px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 4px;
    margin-bottom: 22px;
    width: fit-content;
  }
  .dp-tab {
    padding: 8px 20px;
    border-radius: 9px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.15s;
    color: var(--text-sub);
    background: transparent;
  }
  .dp-tab.activo {
    background: var(--brand);
    color: #ffffff;
    box-shadow: var(--shadow-sm);
  }
  .dp-tab:not(.activo):hover { background: var(--brand-mid); color: var(--brand); }

  /* ── CHART SECTION ── */
  .dp-chart-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px 22px;
    margin-bottom: 20px;
  }
  .dp-chart-section h3 { font-size: 20px; font-weight: 700; color: var(--brand); margin-bottom: 4px; }
  .dp-chart-section p { font-size: 16px; color: var(--text-sub); margin-bottom: 20px; line-height: 1.5; }

  /* ── TABLE SECTION ── */
  .dp-table-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 22px;
  }
  .dp-table-header {
    padding: 18px 22px;
    border-bottom: 1px solid var(--border);
    font-size: 18px;
    font-weight: 700;
    color: var(--brand);
  }
  .dp-table-scroll { overflow-x: auto; }
  table.dp-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
  }
  table.dp-table thead tr {
    background: var(--brand);
  }
  table.dp-table thead th {
    padding: 11px 14px;
    text-align: center;
    color: rgba(255,255,255,0.85);
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
  table.dp-table tbody tr:nth-child(even) { background: #f8fafc; }
  table.dp-table tbody tr:hover td { background: var(--brand-light); }
  table.dp-table tbody td {
    padding: 10px 14px;
    text-align: center;
    border-bottom: 1px solid #f0f4f8;
    color: var(--text-main);
    font-size: 16px;
  }
  table.dp-table tbody td:first-child { font-weight: 600; }
  table.dp-table tfoot tr { background: var(--brand-light); }
  table.dp-table tfoot td {
    padding: 11px 14px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    border-top: 2px solid var(--brand-mid);
    color: var(--brand-dark);
  }

  /* badge semáforo */
  .dp-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    transition: filter 0.15s;
    border: 1px solid transparent;
  }
  .dp-badge:hover { filter: brightness(0.92); }

  /* ── NOTA METODOLÓGICA ── */
  .dp-nota {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--brand);
    border-radius: var(--radius-md);
    padding: 15px 20px;
    font-size: 15px;
    color: var(--text-sub);
    line-height: 1.7;
  }
  .dp-nota b { color: var(--brand); }
  .dp-nota code {
    background: var(--bg);
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 12.5px;
    color: var(--brand);
  }

  /* ── EMPTY STATE ── */
  .dp-empty { text-align: center; padding: 44px 0; color: var(--text-sub); font-size: 18px; }
  .dp-empty small { display: block; margin-top: 6px; font-size: 14px; color: var(--text-hint); }

  /* ── MODAL ── */
  @keyframes sm-in { from { opacity:0; transform:translateY(24px) scale(0.96); } to { opacity:1; transform:none; } }
  @keyframes sm-bg { from { opacity:0; } to { opacity:1; } }
  .sm-backdrop {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.48);
    backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    padding: 16px;
    animation: sm-bg 0.2s ease;
  }
  .sm-modal {
    width: 100%; max-width: 680px; max-height: 90vh;
    border-radius: 22px; overflow: hidden;
    box-shadow: 0 28px 72px rgba(0,0,0,0.25);
    animation: sm-in 0.28s cubic-bezier(.34,1.56,.64,1);
    display: flex; flex-direction: column;
  }
  .sm-header {
    padding: 24px 28px 20px;
    display: flex; align-items: flex-start; gap: 14px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    flex-shrink: 0;
  }
  .sm-circle {
    width: 52px; height: 52px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; flex-shrink: 0;
  }
  .sm-body { overflow-y: auto; padding: 20px 26px 0; flex: 1; }
  .sm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 12px; margin-bottom: 16px; }
  .sm-card {
    border-radius: 14px; padding: 16px 17px;
    border: 1px solid rgba(0,0,0,0.07);
    background: rgba(255,255,255,0.65);
  }
  .sm-ch { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
  .sm-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 7px; font-size: 15.5px; line-height: 1.5; color: #374151; }
  .sm-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
  .sm-consejo { border-radius: 13px; padding: 14px 18px; margin-bottom: 18px; font-size: 15.5px; line-height: 1.65; border: 1px solid rgba(0,0,0,0.08); background: rgba(255,255,255,0.55); }
  .sm-footer {
    padding: 14px 26px;
    border-top: 1px solid rgba(0,0,0,0.08);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 10px; flex-shrink: 0;
    background: rgba(255,255,255,0.4);
  }
  .sm-close-btn { padding: 10px 28px; border-radius: 10px; font-size: 16px; font-weight: 700; cursor: pointer; border: none; transition: filter .15s; }
  .sm-close-btn:hover { filter: brightness(.88); }
  .sm-x { background: rgba(0,0,0,0.08); border: none; border-radius: 50%; width: 32px; height: 32px; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .15s; }
  .sm-x:hover { background: rgba(0,0,0,0.16); }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .dp-header { padding: 18px 18px 16px; }
    .dp-body { padding: 18px 16px; }
    .dp-header-top { flex-direction: column; gap: 14px; }
    .dp-filters { flex-direction: column; width: 100%; }
    .dp-filter-group { width: 100%; }
    .dp-select { width: 100%; min-width: 0; }
    .dp-btn-update { width: 100%; justify-content: center; padding: 11px; }
    .dp-kpis { grid-template-columns: 1fr 1fr; }
    .dp-tabs { width: 100%; justify-content: center; }
    .sm-backdrop { padding: 0; align-items: flex-end; }
    .sm-modal { max-height: 92vh; border-radius: 20px 20px 0 0; }
    .sm-grid { grid-template-columns: 1fr; }
    .sm-header, .sm-body, .sm-footer { padding-left: 16px; padding-right: 16px; }
  }
  @media (max-width: 400px) {
    .dp-kpis { grid-template-columns: 1fr; }
  }
`;

/* ── TOOLTIP ─────────────────────────────────────────── */
function TooltipPersonalizado({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: 10,
        padding: "12px 16px",
        fontSize: 13,
        minWidth: 200,
      }}
    >
      <div style={{ color: "#94a3b8", fontWeight: 700, marginBottom: 8 }}>
        {label}
      </div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ color: p.color, marginBottom: 4 }}>
          {p.name}: <b>{p.value?.toFixed(1)} mm</b>
        </div>
      ))}
      {payload.length >= 2 && payload[0] && payload[1] && (
        <div
          style={{
            color: "#e2e8f0",
            borderTop: "1px solid #334155",
            paddingTop: 6,
            marginTop: 6,
          }}
        >
          Diferencia:{" "}
          <b
            style={{
              color:
                payload[1].value - payload[0].value >= 0
                  ? "#60a5fa"
                  : "#f87171",
            }}
          >
            {payload[1].value - payload[0].value >= 0 ? "+" : ""}
            {(payload[1].value - payload[0].value)?.toFixed(1)} mm
          </b>
        </div>
      )}
    </div>
  );
}

/* ── MODAL ───────────────────────────────────────────── */
function SemaforoModal({ estado, contexto, onClose }) {
  const sf = SEMAFORO[estado] || SEMAFORO.normal;
  const info = MODAL_CONTENIDO[estado] || MODAL_CONTENIDO.normal;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const gradients = {
    normal: "#f0fdf4",
    deficit_leve: "#fffbeb",
    deficit_severo: "#fff1f2",
    exceso_leve: "#faf5ff",
    exceso_severo: "#eff6ff",
  };

  return (
    <div className="sm-backdrop" onClick={onClose}>
      <div
        className="sm-modal"
        style={{ background: "#fff" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm-header">
          <div className="sm-circle" style={{ background: sf.badgeBg }}>
            {info.icono}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                  color: sf.color,
                }}
              >
                {info.titulo}
              </h2>
              {contexto?.pct !== undefined && (
                <span
                  style={{
                    background: sf.badgeBg,
                    color: "#fff",
                    borderRadius: 20,
                    padding: "2px 12px",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {contexto.pct >= 0 ? "+" : ""}
                  {contexto.pct}% vs media
                </span>
              )}
            </div>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: 13.5,
                color: sf.color,
                opacity: 0.78,
              }}
            >
              {info.subtitulo}
            </p>
            {contexto && (
              <p
                style={{ margin: "5px 0 0", fontSize: 12.5, color: "#64748b" }}
              >
                📍 {contexto.municipio} · {contexto.periodo}
              </p>
            )}
          </div>
          <button
            className="sm-x"
            style={{ color: sf.color }}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="sm-body">
          <div className="sm-grid">
            {info.secciones.map((sec, i) => (
              <div
                key={i}
                className="sm-card"
                style={{ borderColor: sf.borde }}
              >
                <div className="sm-ch">
                  <span style={{ fontSize: 20 }}>{sec.icono}</span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: sf.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {sec.titulo}
                  </span>
                </div>
                {sec.items.map((item, j) => (
                  <div key={j} className="sm-item">
                    <div
                      className="sm-dot"
                      style={{ background: sf.badgeBg }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            className="sm-consejo"
            style={{ borderColor: sf.borde, color: sf.color }}
          >
            <b>💡 Recomendación FEDEPAPA:</b>{" "}
            <span style={{ color: "#374151" }}>{info.consejo}</span>
          </div>
        </div>

        <div className="sm-footer">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20 }}>🥔</span>
            <span
              style={{ fontSize: 12, color: "#64748b", fontStyle: "italic" }}
            >
              Infórmate, planifica y toma mejores decisiones para una papa sana
              y productiva.
            </span>
          </div>
          <button
            className="sm-close-btn"
            onClick={onClose}
            style={{ background: sf.badgeBg, color: "#fff" }}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── COMPONENTE PRINCIPAL ────────────────────────────── */
export default function DashboardPrecipitacion() {
  const [departamento, setDepartamento] = useState("Boyacá");
  const [municipioSeleccionado, setMunicipioSel] = useState("Tutazá");
  const [municipio, setMunicipio] = useState(
    () => municipios.find((m) => m.nombre === "Tutazá") || municipios[0],
  );
  const [anio, setAnio] = useState("2026");
  const [mes, setMes] = useState("todos");
  const [rawMensual, setRawMensual] = useState({});
  const [cargando, setCargando] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [vista, setVista] = useState("mensual");
  const [modal, setModal] = useState(null);

  const anioActual = new Date().getFullYear();
  const anios = [];
  for (let a = 2020; a <= anioActual; a++) anios.push(a);

  const municipiosFiltrados = municipios.filter(
    (m) => departamento === "Todos" || m.departamento === departamento,
  );

  const handleDepartamento = (e) => {
    setDepartamento(e.target.value);
    setMunicipioSel("");
    setRawMensual({});
  };

  const handleMunicipio = (e) => {
    const nombre = e.target.value;
    setMunicipioSel(nombre);
    const found = municipios.find((m) => m.nombre === nombre);
    if (found) setMunicipio(found);
  };

  useEffect(() => {
    cargarAnio();
  }, [municipio, anio]);

  const cargarAnio = async () => {
    setCargando(true);
    setErrorMsg("");
    try {
      const hoy = new Date().toISOString().split("T")[0];
      const inicio = `${anio}-01-01`;
      const fin = `${anio}-12-31` > hoy ? hoy : `${anio}-12-31`;
      if (inicio > hoy) {
        setRawMensual({});
        setCargando(false);
        return;
      }

      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${municipio.lat}&longitude=${municipio.lon}&start_date=${inicio}&end_date=${fin}&daily=precipitation_sum&timezone=America/Bogota`;
      const json = await (await fetch(url)).json();
      if (!json.daily?.time) {
        setRawMensual({});
        setCargando(false);
        return;
      }

      const porMes = {};
      json.daily.time.forEach((fecha, i) => {
        const m = fecha.slice(5, 7);
        if (!porMes[m]) porMes[m] = 0;
        const val = json.daily.precipitation_sum?.[i];
        if (val != null && !isNaN(val)) porMes[m] += val;
      });
      Object.keys(porMes).forEach((k) => {
        porMes[k] = parseFloat(porMes[k].toFixed(1));
      });
      setRawMensual(porMes);
    } catch (err) {
      console.error(err);
      setErrorMsg("Error al consultar Open-Meteo. Intenta nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  const dataMensual = useMemo(() => {
    const refsUsar =
      mes === "todos"
        ? PREC_REFERENCIA
        : PREC_REFERENCIA.filter((r) => r.mes === mes);
    return refsUsar
      .filter((ref) => rawMensual[ref.mes] !== undefined)
      .map((ref) => {
        const precReal = rawMensual[ref.mes];
        const precMedia = parseFloat(ref.prec.toFixed(1));
        const dif = parseFloat((precReal - precMedia).toFixed(1));
        const pct =
          precMedia > 0 ? parseFloat(((dif / precMedia) * 100).toFixed(1)) : 0;
        return {
          mes: ref.nombre,
          mesNum: ref.mes,
          precMedia,
          precReal,
          diferencia: dif,
          pct,
          semaforo: clasificar(pct),
        };
      });
  }, [rawMensual, mes]);

  const dataAcumulada = useMemo(() => {
    let sumMedia = 0,
      sumReal = 0;
    return dataMensual.map((d) => {
      sumMedia = parseFloat((sumMedia + d.precMedia).toFixed(1));
      sumReal = parseFloat((sumReal + d.precReal).toFixed(1));
      const dif = parseFloat((sumReal - sumMedia).toFixed(1));
      const pct =
        sumMedia > 0 ? parseFloat(((dif / sumMedia) * 100).toFixed(1)) : 0;
      return {
        mes: d.mes,
        mediaAcum: sumMedia,
        realAcum: sumReal,
        diferenciaAcum: dif,
        pctAcum: pct,
        semaforo: clasificar(pct),
      };
    });
  }, [dataMensual]);

  const acumReal = dataMensual.reduce((s, d) => s + d.precReal, 0);
  const acumMedia = dataMensual.reduce((s, d) => s + d.precMedia, 0);
  const difTotal = parseFloat((acumReal - acumMedia).toFixed(1));
  const pctTotal =
    acumMedia > 0 ? parseFloat(((difTotal / acumMedia) * 100).toFixed(1)) : 0;
  const semaforoGlobal = clasificar(pctTotal);
  const sf = SEMAFORO[semaforoGlobal];
  const ultimoAcum = dataAcumulada[dataAcumulada.length - 1];

  const tituloFiltro =
    mes === "todos"
      ? `Año ${anio} — todos los meses con datos`
      : `${PREC_REFERENCIA.find((r) => r.mes === mes)?.nombre} ${anio}`;

  const deptos = [...new Set(municipios.map((m) => m.departamento))].sort();

  const abrirModal = (estado, pct, periodo) =>
    setModal({
      estado,
      contexto: {
        municipio: municipio.nombre,
        pct,
        periodo: periodo || tituloFiltro,
      },
    });

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {modal && (
        <SemaforoModal
          estado={modal.estado}
          contexto={modal.contexto}
          onClose={() => setModal(null)}
        />
      )}

      <div className="dp-wrap">
        {/* ── HEADER ── */}
        <div className="dp-header">
          <div className="dp-header-top">
            <div className="dp-title-block">
              <h2>🌧️ Monitor de Precipitación Mensual</h2>
              <p>
                {municipio.nombre} · {municipio.departamento}
              </p>
            </div>

            <div className="dp-filters">
              <div className="dp-filter-group">
                <span className="dp-filter-label">Año</span>
                <select
                  className="dp-select"
                  value={anio}
                  onChange={(e) => setAnio(e.target.value)}
                >
                  {anios.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dp-filter-group">
                <span className="dp-filter-label">Mes</span>
                <select
                  className="dp-select"
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                >
                  <option value="todos">Todos los meses</option>
                  {PREC_REFERENCIA.map((r) => (
                    <option key={r.mes} value={r.mes}>
                      {r.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dp-filter-group">
                <span className="dp-filter-label">Departamento</span>
                <select
                  className="dp-select"
                  value={departamento}
                  onChange={handleDepartamento}
                >
                  <option value="Todos">Todos</option>
                  {deptos.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dp-filter-group">
                <span className="dp-filter-label">Municipio</span>
                <select
                  className="dp-select"
                  value={municipioSeleccionado}
                  onChange={handleMunicipio}
                >
                  <option value="">Seleccionar…</option>
                  {municipiosFiltrados.map((m) => (
                    <option
                      key={`${m.departamento}-${m.nombre}`}
                      value={m.nombre}
                    >
                      {m.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="dp-btn-update"
                onClick={cargarAnio}
                disabled={cargando}
              >
                {cargando ? "Consultando…" : "↺ Actualizar"}
              </button>
            </div>
          </div>

          <div className="dp-location-pill">
            📍 <b>{municipio.nombre}</b> · {municipio.departamento} ·{" "}
            {municipio.lat}, {municipio.lon}
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="dp-body">
          {errorMsg && <div className="dp-error">⚠ {errorMsg}</div>}

          {cargando ? (
            <div className="dp-spinner-wrap">
              <div className="dp-spinner" />
              Consultando precipitación para <b>{municipio.nombre}</b>…
            </div>
          ) : dataMensual.length === 0 ? (
            <div className="dp-empty">
              Sin datos disponibles para el período seleccionado.
              <small>
                Verifica que el año y el municipio sean correctos, o que la
                fecha ya haya pasado.
              </small>
            </div>
          ) : (
            <>
              {/* KPIs */}
              <div className="dp-kpis">
                <div className="dp-kpi">
                  <span className="dp-kpi-icon">🌧️</span>
                  <div className="dp-kpi-value">{acumReal.toFixed(1)} mm</div>
                  <div className="dp-kpi-label">
                    {mes === "todos" ? "Real acumulado" : "Real del mes"}
                  </div>
                </div>
                <div className="dp-kpi">
                  <span className="dp-kpi-icon">📊</span>
                  <div className="dp-kpi-value">{acumMedia.toFixed(1)} mm</div>
                  <div className="dp-kpi-label">
                    {mes === "todos" ? "Media histórica" : "Media del mes"}
                  </div>
                </div>
                <div className="dp-kpi">
                  <span className="dp-kpi-icon">
                    {difTotal >= 0 ? "⬆️" : "⬇️"}
                  </span>
                  <div
                    className="dp-kpi-value"
                    style={{ color: difTotal >= 0 ? "#1d6fa4" : "#c62828" }}
                  >
                    {difTotal >= 0 ? "+" : ""}
                    {difTotal} mm
                  </div>
                  <div className="dp-kpi-label">Diferencia</div>
                </div>
                <div
                  className="dp-kpi dp-kpi-semaforo"
                  style={{ background: sf.bg, borderColor: sf.borde }}
                  onClick={() =>
                    abrirModal(semaforoGlobal, pctTotal, tituloFiltro)
                  }
                  title="Click para ver recomendaciones"
                >
                  <div
                    className="dp-pulse"
                    style={{ background: sf.badgeBg }}
                  />
                  <span className="dp-kpi-icon">
                    {DOT_ICONOS[semaforoGlobal]}
                  </span>
                  <div className="dp-kpi-value" style={{ color: sf.color }}>
                    {pctTotal >= 0 ? "+" : ""}
                    {pctTotal}%
                  </div>
                  <div className="dp-kpi-label" style={{ color: sf.color }}>
                    vs media del período
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      fontWeight: 700,
                      color: sf.color,
                    }}
                  >
                    {sf.etiqueta}
                  </div>
                  <div className="dp-kpi-hint">👆 Ver recomendaciones</div>
                </div>
              </div>

              {/* Banner semáforo */}
              <div
                className="dp-banner"
                style={{ background: sf.bg, borderColor: sf.borde }}
                onClick={() =>
                  abrirModal(semaforoGlobal, pctTotal, tituloFiltro)
                }
              >
                <span className="dp-banner-icon">
                  {BANNER_ICONOS[semaforoGlobal]}
                </span>
                <div className="dp-banner-body">
                  <strong style={{ color: sf.color }}>{sf.etiqueta}</strong>
                  <span style={{ color: sf.color, opacity: 0.85 }}>
                    {sf.texto} · {tituloFiltro}
                  </span>
                </div>
                <span className="dp-banner-cta" style={{ color: sf.color }}>
                  Ver recomendaciones →
                </span>
              </div>

              {/* Tabs */}
              <div className="dp-tabs">
                <button
                  className={`dp-tab ${vista === "mensual" ? "activo" : ""}`}
                  onClick={() => setVista("mensual")}
                >
                  📅 Mensual
                </button>
                <button
                  className={`dp-tab ${vista === "acumulada" ? "activo" : ""}`}
                  onClick={() => setVista("acumulada")}
                >
                  📈 Acumulada
                </button>
              </div>

              {/* Chart */}
              <div className="dp-chart-section">
                <h3>
                  {vista === "mensual"
                    ? "Precipitación mensual: media histórica vs real"
                    : "Precipitación acumulada: media histórica vs real"}
                </h3>
                <p>
                  {vista === "mensual"
                    ? "Cada barra muestra el acumulado mensual real versus la media histórica mensual."
                    : "Suma progresiva mes a mes. Permite ver si el año va por encima o debajo de la media histórica."}
                </p>

                {vista === "mensual" ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                      data={dataMensual}
                      margin={{ top: 6, right: 8, left: 0, bottom: 4 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                      <XAxis
                        dataKey="mes"
                        tick={{ fontSize: 12, fill: "#64748b" }}
                      />
                      <YAxis
                        unit=" mm"
                        tick={{ fontSize: 12, fill: "#64748b" }}
                        width={55}
                      />
                      <Tooltip content={<TooltipPersonalizado />} />
                      <Legend
                        iconType="circle"
                        wrapperStyle={{ fontSize: 13 }}
                      />
                      <Bar
                        dataKey="precMedia"
                        name="Media histórica (mm)"
                        fill="#b8d4ea"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={26}
                      />
                      <Bar
                        dataKey="precReal"
                        name="Real del año (mm)"
                        fill="#004776"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={26}
                      />
                      <Line
                        type="monotone"
                        dataKey="precMedia"
                        name="_lineaMedia"
                        stroke="#b8d4ea"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        legendType="none"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                      data={dataAcumulada}
                      margin={{ top: 6, right: 8, left: 0, bottom: 4 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                      <XAxis
                        dataKey="mes"
                        tick={{ fontSize: 12, fill: "#64748b" }}
                      />
                      <YAxis
                        unit=" mm"
                        tick={{ fontSize: 12, fill: "#64748b" }}
                        width={55}
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (!active || !payload?.length) return null;
                          const d = dataAcumulada.find((x) => x.mes === label);
                          const sf2 = d ? SEMAFORO[d.semaforo] : null;
                          return (
                            <div
                              style={{
                                background: "#0f172a",
                                borderRadius: 10,
                                padding: "12px 16px",
                                fontSize: 13,
                                minWidth: 220,
                              }}
                            >
                              <div
                                style={{
                                  color: "#94a3b8",
                                  fontWeight: 700,
                                  marginBottom: 8,
                                }}
                              >
                                {label}
                              </div>
                              {payload.map((p) => (
                                <div
                                  key={p.dataKey}
                                  style={{ color: p.color, marginBottom: 4 }}
                                >
                                  {p.name}: <b>{p.value?.toFixed(1)} mm</b>
                                </div>
                              ))}
                              {d && (
                                <div
                                  style={{
                                    color: "#e2e8f0",
                                    borderTop: "1px solid #334155",
                                    paddingTop: 6,
                                    marginTop: 6,
                                  }}
                                >
                                  Diferencia acum.:{" "}
                                  <b
                                    style={{
                                      color:
                                        d.diferenciaAcum >= 0
                                          ? "#60a5fa"
                                          : "#f87171",
                                    }}
                                  >
                                    {d.diferenciaAcum >= 0 ? "+" : ""}
                                    {d.diferenciaAcum} mm
                                  </b>
                                  <br />% vs media:{" "}
                                  <b style={{ color: sf2?.color || "#e2e8f0" }}>
                                    {d.pctAcum >= 0 ? "+" : ""}
                                    {d.pctAcum}% {sf2?.etiqueta}
                                  </b>
                                </div>
                              )}
                            </div>
                          );
                        }}
                      />
                      <Legend
                        iconType="circle"
                        wrapperStyle={{ fontSize: 13 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="mediaAcum"
                        name="Media histórica acumulada (mm)"
                        stroke="#b8d4ea"
                        strokeWidth={2.5}
                        strokeDasharray="6 3"
                        dot={{ r: 4, fill: "#b8d4ea" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="realAcum"
                        name="Real acumulado (mm)"
                        stroke="#004776"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#004776" }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>

              {/* Table */}
              <div className="dp-table-section">
                <div className="dp-table-header">
                  {vista === "mensual"
                    ? "Detalle mensual"
                    : "Detalle acumulado"}
                </div>
                <div className="dp-table-scroll">
                  {vista === "mensual" ? (
                    <table className="dp-table">
                      <thead>
                        <tr>
                          {[
                            "Mes",
                            "Media hist. (mm)",
                            "Real (mm)",
                            "Diferencia (mm)",
                            "% vs media",
                            "Estado",
                          ].map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataMensual.map((row, idx) => {
                          const s = SEMAFORO[row.semaforo];
                          return (
                            <tr key={row.mes}>
                              <td>{row.mes}</td>
                              <td>{row.precMedia}</td>
                              <td style={{ fontWeight: 700 }}>
                                {row.precReal}
                              </td>
                              <td
                                style={{
                                  color:
                                    row.diferencia >= 0 ? "#1d6fa4" : "#c62828",
                                  fontWeight: 600,
                                }}
                              >
                                {row.diferencia >= 0 ? "+" : ""}
                                {row.diferencia}
                              </td>
                              <td style={{ fontWeight: 700, color: s.color }}>
                                {row.pct >= 0 ? "+" : ""}
                                {row.pct}%
                              </td>
                              <td>
                                <span
                                  className="dp-badge"
                                  style={{
                                    background: s.bg,
                                    color: s.color,
                                    borderColor: s.borde,
                                  }}
                                  onClick={() =>
                                    abrirModal(
                                      row.semaforo,
                                      row.pct,
                                      row.mes + " " + anio,
                                    )
                                  }
                                >
                                  {s.etiqueta}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Total</td>
                          <td>{acumMedia.toFixed(1)}</td>
                          <td>{acumReal.toFixed(1)}</td>
                          <td
                            style={{
                              color: difTotal >= 0 ? "#1d6fa4" : "#c62828",
                            }}
                          >
                            {difTotal >= 0 ? "+" : ""}
                            {difTotal}
                          </td>
                          <td style={{ color: sf.color }}>
                            {pctTotal >= 0 ? "+" : ""}
                            {pctTotal}%
                          </td>
                          <td>
                            <span
                              className="dp-badge"
                              style={{
                                background: sf.bg,
                                color: sf.color,
                                borderColor: sf.borde,
                              }}
                              onClick={() =>
                                abrirModal(
                                  semaforoGlobal,
                                  pctTotal,
                                  tituloFiltro,
                                )
                              }
                            >
                              {sf.etiqueta}
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  ) : (
                    <table className="dp-table">
                      <thead>
                        <tr>
                          {[
                            "Mes",
                            "Media acum. (mm)",
                            "Real acum. (mm)",
                            "Diferencia acum.",
                            "% acum.",
                            "Estado",
                          ].map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataAcumulada.map((row) => {
                          const s = SEMAFORO[row.semaforo];
                          return (
                            <tr key={row.mes}>
                              <td>{row.mes}</td>
                              <td>{row.mediaAcum}</td>
                              <td style={{ fontWeight: 700 }}>
                                {row.realAcum}
                              </td>
                              <td
                                style={{
                                  color:
                                    row.diferenciaAcum >= 0
                                      ? "#1d6fa4"
                                      : "#c62828",
                                  fontWeight: 600,
                                }}
                              >
                                {row.diferenciaAcum >= 0 ? "+" : ""}
                                {row.diferenciaAcum}
                              </td>
                              <td style={{ fontWeight: 700, color: s.color }}>
                                {row.pctAcum >= 0 ? "+" : ""}
                                {row.pctAcum}%
                              </td>
                              <td>
                                <span
                                  className="dp-badge"
                                  style={{
                                    background: s.bg,
                                    color: s.color,
                                    borderColor: s.borde,
                                  }}
                                  onClick={() =>
                                    abrirModal(
                                      row.semaforo,
                                      row.pctAcum,
                                      row.mes + " " + anio,
                                    )
                                  }
                                >
                                  {s.etiqueta}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      {ultimoAcum &&
                        (() => {
                          const s = SEMAFORO[ultimoAcum.semaforo];
                          return (
                            <tfoot>
                              <tr>
                                <td>Acumulado</td>
                                <td>{ultimoAcum.mediaAcum}</td>
                                <td>{ultimoAcum.realAcum}</td>
                                <td
                                  style={{
                                    color:
                                      ultimoAcum.diferenciaAcum >= 0
                                        ? "#1d6fa4"
                                        : "#c62828",
                                  }}
                                >
                                  {ultimoAcum.diferenciaAcum >= 0 ? "+" : ""}
                                  {ultimoAcum.diferenciaAcum}
                                </td>
                                <td style={{ color: s.color }}>
                                  {ultimoAcum.pctAcum >= 0 ? "+" : ""}
                                  {ultimoAcum.pctAcum}%
                                </td>
                                <td>
                                  <span
                                    className="dp-badge"
                                    style={{
                                      background: s.bg,
                                      color: s.color,
                                      borderColor: s.borde,
                                    }}
                                    onClick={() =>
                                      abrirModal(
                                        ultimoAcum.semaforo,
                                        ultimoAcum.pctAcum,
                                        tituloFiltro,
                                      )
                                    }
                                  >
                                    {s.etiqueta}
                                  </span>
                                </td>
                              </tr>
                            </tfoot>
                          );
                        })()}
                    </table>
                  )}
                </div>
              </div>

              {/* Nota metodológica */}
              <div className="dp-nota">
                <b>Metodología:</b> La <em>media histórica</em> proviene del
                dataset Prec ETO Spatial (valores fijos por mes). La{" "}
                <em>precipitación real</em> es el acumulado mensual de datos
                diarios de Open-Meteo (archive API). El <b>% vs media</b> se
                calcula como <code>(real − media) / media × 100</code> para cada
                período seleccionado.
                <br />
                🟢 −5% a +5% normal · 🟡 −6% a −15% déficit leve · 🔴 ≤ −16%
                déficit severo · 🟣 +6% a +15% exceso leve · 🔵 &gt; +15% exceso
                severo ·{" "}
                <b>
                  Haz click en cualquier semáforo para ver recomendaciones
                  agronómicas.
                </b>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
