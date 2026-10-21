// =====================================================
// Proyectos del portafolio. Cada objeto genera su tarjeta
// en el inicio y su página en #/proyecto/<slug>.
//
// urlDashboard:
//  · Power BI → En Power BI Service: Archivo > Insertar informe > Publicar en la web (público)
//    y pega aquí el enlace (solo el enlace, no todo el código).
//  · Excel → sube una captura a public/img/ (ej: dashboard-3.png) y escribe 'img/dashboard-3.png'.
//
// enlacesDescarga (Google Drive):
//  1. Sube el archivo a Google Drive.
//  2. Clic derecho > Compartir > Acceso general: "Cualquier persona con el enlace" > Copiar enlace.
//     Queda así: https://drive.google.com/file/d/AQUI_VA_EL_ID/view?usp=sharing
//  3. Copia solo el ID y úsalo así: https://drive.google.com/uc?export=download&id=AQUI_VA_EL_ID
//     Con este formato el archivo se DESCARGA directamente al hacer clic.
// =====================================================

export const tiposHerramienta = {
  pbi: { nombre: 'Power BI', tipoVisor: 'iframe' },
  xls: { nombre: 'Excel', tipoVisor: 'imagen' },
  gs: { nombre: 'Google Sheets', tipoVisor: 'imagen' },
  py: { nombre: 'Python', tipoVisor: 'imagen' },
};

const hallazgosPlantilla = [
  { valor: '00%', texto: 'Hallazgo principal en una línea.', resaltado: true },
  { valor: '$0', texto: 'Segundo dato importante.' },
  { valor: 'Top 5', texto: 'Tercer dato importante.' },
];

export const listaProyectos = [
  {
    slug: 'gestor-de-proveedores',
    herramienta: 'xls',
    enDesarrollo: true,
    titulo: 'Gestor de proveedores',
    resumen:
      'Herramienta en Excel con macros VBA para registrar, analizar y automatizar la gestión de proveedores.',
    descripcion:
      'Herramienta en Excel con macros VBA para registrar proveedores, analizar sus datos y automatizar las tareas repetitivas de su gestión.',
    etiquetas: ['VBA', 'Análisis de datos', 'Automatización'],
    detalles: {
      herramientasUsadas: 'Excel · VBA',
      fuenteDatos: 'Por definir',
      periodo: 'En desarrollo',
    },
    urlDashboard: '',
    enlacesDescarga: [{ texto: 'Descargar archivo Excel', url: 'PEGA_AQUI_EL_ENLACE_DEL_EXCEL' }],
    hallazgos: hallazgosPlantilla,
    alturasMiniatura: [30, 55, 40, 85, 62],
  },
  {
    slug: 'gestor-de-tareas',
    herramienta: 'gs',
    enDesarrollo: true,
    titulo: 'Gestor de tareas',
    resumen:
      'Seguimiento de tareas en Google Sheets con fórmulas y un dashboard para ver el avance de un vistazo.',
    descripcion:
      'Sistema de seguimiento de tareas en Google Sheets que usa fórmulas para calcular el avance y un dashboard para ver el estado del trabajo de un vistazo.',
    etiquetas: ['Fórmulas', 'Dashboard'],
    detalles: {
      herramientasUsadas: 'Google Sheets · Fórmulas',
      fuenteDatos: 'Por definir',
      periodo: 'En desarrollo',
    },
    urlDashboard: '',
    enlacesDescarga: [
      { texto: 'Abrir hoja de Google Sheets', url: 'PEGA_AQUI_EL_ENLACE_DE_GOOGLE_SHEETS' },
    ],
    hallazgos: hallazgosPlantilla,
    alturasMiniatura: [45, 75, 58, 35, 50],
  },
  {
    slug: 'app-de-inventario',
    herramienta: 'py',
    enDesarrollo: true,
    titulo: 'App de inventario',
    resumen:
      'Aplicación de escritorio en Python para controlar inventario, con interfaz en Tkinter y Pywebview, apoyada en IA y Excel.',
    descripcion:
      'Aplicación de escritorio en Python para controlar el inventario, con interfaz construida en Tkinter y Pywebview, apoyo de inteligencia artificial y conexión con Excel.',
    etiquetas: ['Tkinter', 'Pywebview', 'IA', 'Excel'],
    detalles: {
      herramientasUsadas: 'Python · Tkinter · Pywebview · IA · Excel',
      fuenteDatos: 'Por definir',
      periodo: 'En desarrollo',
    },
    urlDashboard: '',
    enlacesDescarga: [{ texto: 'Descargar código', url: 'PEGA_AQUI_EL_ENLACE_DEL_CODIGO' }],
    hallazgos: hallazgosPlantilla,
    alturasMiniatura: [38, 62, 78, 50, 44],
  },
  {
    slug: 'reporte-de-ventas',
    herramienta: 'pbi',
    enDesarrollo: true,
    titulo: 'Reporte de ventas',
    resumen:
      'Reporte interactivo en Power BI con proceso ETL en Power Query y medidas DAX para analizar las ventas.',
    descripcion:
      'Reporte interactivo en Power BI que limpia y transforma los datos con Power Query (ETL) y usa medidas DAX para analizar el comportamiento de las ventas.',
    etiquetas: ['Power Query', 'ETL', 'DAX'],
    detalles: {
      herramientasUsadas: 'Power BI · Power Query · DAX',
      fuenteDatos: 'Por definir',
      periodo: 'En desarrollo',
    },
    urlDashboard: '',
    urlPantallaCompleta: 'PEGA_AQUI_EL_ENLACE_DE_POWER_BI',
    enlacesDescarga: [
      { texto: 'Descargar archivo .pbix', url: 'PEGA_AQUI_EL_ENLACE_DEL_PBIX' },
      { texto: 'Descargar datos (.csv)', url: 'PEGA_AQUI_EL_ENLACE_DEL_CSV' },
    ],
    hallazgos: hallazgosPlantilla,
    alturasMiniatura: [70, 45, 58, 32, 60],
  },
];

export function buscarProyecto(slug) {
  return listaProyectos.find((proyecto) => proyecto.slug === slug);
}

// Devuelve el proyecto anterior y el siguiente (en ciclo) para el paginador
export function obtenerVecinos(slug) {
  const indiceActual = listaProyectos.findIndex((proyecto) => proyecto.slug === slug);
  const totalProyectos = listaProyectos.length;
  return {
    proyectoAnterior: listaProyectos[(indiceActual - 1 + totalProyectos) % totalProyectos],
    proyectoSiguiente: listaProyectos[(indiceActual + 1) % totalProyectos],
  };
}

// Un enlace sin configurar todavía empieza por "PEGA_AQUI" o contiene "tu-usuario"
export function esEnlacePendiente(url) {
  return !url || url.startsWith('PEGA_AQUI') || url.includes('tu-usuario');
}
