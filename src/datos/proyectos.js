// =====================================================
// Proyectos del portafolio. Cada objeto genera su tarjeta
// en el inicio y su página en #/proyecto/<slug>.
//
// urlDashboard:
//  · Power BI → En Power BI Service: Archivo > Insertar informe > Publicar en la web (público)
//    y pega aquí el enlace (solo el enlace, no todo el código).
//  · Excel → sube una captura a public/img/ (ej: dashboard-3.png) y escribe 'img/dashboard-3.png'.
//
// capturas (opcional): lista de imágenes en public/img/ que se muestran en un slider
// en lugar de urlDashboard. tituloVisor cambia el título de esa sección.
// portada (opcional): imagen en public/img/ para la tarjeta del inicio.
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
    descripcionAmpliada: {
      titulo: 'Gestor de proveedores – Automatización con VBA',
      parrafos: [
        'Este proyecto fue desarrollado en VBA (Visual Basic for Applications), con el apoyo de Claude IA y mis conocimientos en programación mediante macros, con el propósito de automatizar y optimizar el proceso de gestión de proveedores utilizando Microsoft Excel, una herramienta ampliamente utilizada en el entorno empresarial para administrar y organizar información.',
        'El desarrollo de la aplicación se fundamentó en principios de programación modular y buenas prácticas de desarrollo de software, buscando garantizar un código organizado, fácil de mantener y escalable ante futuras necesidades del sistema.',
        'La construcción del gestor se llevó a cabo tomando como referencia los requisitos funcionales y no funcionales, definidos previamente para establecer el alcance, el comportamiento y las características que debía cumplir la aplicación.',
        'En cuanto a su estructura, se implementó el patrón de diseño MVC (Modelo-Vista-Controlador), con el propósito de separar las responsabilidades del sistema: la interfaz de usuario, la lógica de negocio y la gestión de los datos. Esta organización facilita el mantenimiento, la comprensión y la evolución de la aplicación.',
        'Finalmente, el almacenamiento y la administración de la información se realizan mediante tablas de Excel, que funcionan como fuente de datos del sistema. Estas se encuentran conectadas con los formularios de VBA, desde los cuales se ejecutan las operaciones de registro, consulta y actualización de información, permitiendo almacenar los datos en las tablas y columnas correspondientes.',
      ],
    },
    etiquetas: ['VBA', 'Análisis de datos', 'Automatización'],
    tituloVisor: { antetitulo: 'Mockup', titulo: 'Aplicación VBA' },
    portada: 'img/gestor-proveedores/portada.png',
    urlDashboard: '',
    capturas: [
      { url: 'img/gestor-proveedores/dashboard.png', texto: 'Dashboard' },
      { url: 'img/gestor-proveedores/nuevo-proveedor.png', texto: 'Nuevo proveedor' },
      { url: 'img/gestor-proveedores/base-de-datos.png', texto: 'Base de datos' },
      { url: 'img/gestor-proveedores/alertas.png', texto: 'Alertas' },
    ],
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
    slug: 'visualizacion-de-datos-en-excel',
    herramienta: 'xls',
    enDesarrollo: true,
    titulo: 'Visualización de datos en Excel',
    resumen:
      'Dashboard en Excel con tablas dinámicas y gráficos para convertir los datos en indicadores fáciles de leer.',
    descripcion:
      'Dashboard en Excel que organiza los datos con tablas dinámicas y los presenta en gráficos e indicadores clave para entender la información de un vistazo y apoyar la toma de decisiones.',
    etiquetas: ['Dashboard', 'Tablas dinámicas', 'Gráficos'],
    detalles: {
      herramientasUsadas: 'Excel · Tablas dinámicas · Gráficos',
      fuenteDatos: 'Por definir',
      periodo: 'En desarrollo',
    },
    urlDashboard: '',
    enlacesDescarga: [{ texto: 'Descargar archivo Excel', url: 'PEGA_AQUI_EL_ENLACE_DEL_EXCEL' }],
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
