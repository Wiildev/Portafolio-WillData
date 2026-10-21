# WillData · Portafolio de Wilson José Mato Baena

Portafolio de análisis de datos hecho con **HTML5, Tailwind CSS v4, JavaScript y React** (Vite), con gráficos animados de **Recharts**.

## Cómo usarlo

```bash
npm install       # una sola vez
npm run dev       # servidor local con recarga en vivo
npm run build     # versión optimizada en /dist
npm run preview   # revisar /dist en local
npm run lint      # revisar el código
npm run formato   # dar formato con Prettier
```

## Dónde editar el contenido

Todo el texto está en `src/datos/`; no hace falta tocar los componentes.

| Archivo | Qué contiene |
| --- | --- |
| `perfil.js` | Nombre, foto, correo, LinkedIn, GitHub, enlace del CV |
| `proyectos.js` | Los proyectos: textos, dashboard, enlaces de descarga, hallazgos |
| `habilidades.js` | Grupos de habilidades de "Sobre mí" |
| `graficos.js` | Datos de los gráficos de tarta, línea y barras (ahora son de ejemplo) |

- **Colores**: paleta en `src/estilos/global.css` (`hielo`, `cielo`, `turquesa`, `oceano`, `marino`).
- **Imágenes**: van en `public/img/`. Las capturas de dashboards de Excel se referencian como `img/archivo.png`.
- **Nuevo proyecto**: añade un objeto a `listaProyectos`; la tarjeta, la página y el paginador se generan solos.

## Estructura

```
src/
├─ componentes/
│  ├─ diseno/    Encabezado, PiePagina, Contenedor
│  ├─ ui/        Boton, Etiqueta, Logo, TituloSeccion
│  ├─ inicio/    Hero, SeccionProyectos, SeccionGraficos, SobreMi, Contacto
│  └─ graficos/  GraficoTarta, GraficoLinea, GraficoBarras, TarjetaGrafico
├─ datos/        contenido editable
├─ hooks/        useEnPantalla, useMovimientoReducido, useIrASeccion
├─ paginas/      Inicio, DetalleProyecto, NoEncontrado
└─ estilos/      global.css (Tailwind + paleta)
```

Convención: variables y funciones en español con camelCase; componentes en PascalCase. Los hooks empiezan por `use` porque React lo exige para reconocerlos.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repositorio: **Settings > Pages > Source: GitHub Actions**.
3. Cada `push` a `main` ejecuta `.github/workflows/desplegar.yml` y publica el sitio.

Las rutas usan `HashRouter` (`/#/proyecto/...`), así que recargar una página de proyecto en GitHub Pages no da error 404.
