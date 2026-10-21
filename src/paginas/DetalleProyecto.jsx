import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Contenedor from '../componentes/diseno/Contenedor.jsx';
import Boton from '../componentes/ui/Boton.jsx';
import Etiqueta from '../componentes/ui/Etiqueta.jsx';
import TituloSeccion from '../componentes/ui/TituloSeccion.jsx';
import NoEncontrado from './NoEncontrado.jsx';
import { perfil } from '../datos/perfil.js';
import {
  buscarProyecto,
  esEnlacePendiente,
  obtenerVecinos,
  tiposHerramienta,
} from '../datos/proyectos.js';

const rutaBase = import.meta.env.BASE_URL;

function VisorDashboard({ proyecto }) {
  const { tipoVisor, nombre: nombreHerramienta } = tiposHerramienta[proyecto.herramienta];
  const { urlDashboard, titulo } = proyecto;

  if (!urlDashboard) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-cielo bg-hielo/30 p-6 text-center">
        <b className="text-lg">Proyecto en desarrollo</b>
        <span className="max-w-md text-sm text-marino/60">
          Estoy construyendo este proyecto en {nombreHerramienta}. Muy pronto podrás ver aquí el
          resultado.
        </span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-marino/10 shadow-xl shadow-marino/10">
      {tipoVisor === 'iframe' ? (
        <iframe
          title={`Dashboard de ${nombreHerramienta}: ${titulo}`}
          src={urlDashboard}
          className="aspect-video w-full"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <img
          src={`${rutaBase}${urlDashboard}`}
          alt={`Dashboard de ${titulo}`}
          className="w-full"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function DetalleProyecto() {
  const { slug } = useParams();
  const proyecto = buscarProyecto(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (proyecto) document.title = `${proyecto.titulo} · ${perfil.marca}`;
  }, [proyecto]);

  if (!proyecto) return <NoEncontrado />;

  const { proyectoAnterior, proyectoSiguiente } = obtenerVecinos(slug);
  const {
    herramienta,
    destacado,
    enDesarrollo,
    titulo,
    descripcion,
    etiquetas,
    detalles,
    hallazgos,
  } = proyecto;
  const enlacesDisponibles = [
    ...(proyecto.urlPantallaCompleta
      ? [
          {
            texto: 'Abrir en pantalla completa ↗',
            url: proyecto.urlPantallaCompleta,
            principal: true,
          },
        ]
      : []),
    ...proyecto.enlacesDescarga.map((enlace) => ({ ...enlace, texto: `${enlace.texto} ↓` })),
  ];
  const listaDetalles = [
    { etiqueta: 'Herramientas', valor: detalles.herramientasUsadas },
    { etiqueta: 'Fuente de datos', valor: detalles.fuenteDatos },
    { etiqueta: 'Periodo', valor: detalles.periodo },
  ];

  return (
    <article>
      <header className="bg-gradient-to-b from-hielo/50 to-white">
        <Contenedor className="py-14 md:py-20">
          <div className="flex flex-wrap gap-1.5">
            {destacado && <Etiqueta variante="destacada">★ Proyecto independiente</Etiqueta>}
            <Etiqueta variante={herramienta}>{tiposHerramienta[herramienta].nombre}</Etiqueta>
            {etiquetas.map((etiqueta) => (
              <Etiqueta key={etiqueta}>{etiqueta}</Etiqueta>
            ))}
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">{titulo}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-marino/70">{descripcion}</p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {listaDetalles.map(({ etiqueta, valor }) => (
              <div key={etiqueta} className="rounded-2xl border border-marino/10 bg-white p-4">
                <dt className="text-xs font-semibold tracking-wide text-turquesa uppercase">
                  {etiqueta}
                </dt>
                <dd className="mt-1 font-semibold">{valor}</dd>
              </div>
            ))}
          </dl>
        </Contenedor>
      </header>

      <Contenedor como="section" className="py-12">
        <TituloSeccion antetitulo="Panel de control" titulo="Dashboard" />
        <div className="mt-6">
          <VisorDashboard proyecto={proyecto} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {enlacesDisponibles.map(({ texto, url, principal }) =>
            esEnlacePendiente(url) ? (
              <span
                key={texto}
                title="Disponible próximamente"
                className="inline-flex cursor-not-allowed items-center rounded-xl border border-dashed border-marino/20 px-5 py-3 text-[15px] font-semibold text-marino/40"
              >
                {texto}
              </span>
            ) : (
              <Boton
                key={texto}
                variante={principal ? 'primario' : 'secundario'}
                href={url}
                externo
              >
                {texto}
              </Boton>
            ),
          )}
        </div>
      </Contenedor>

      {!enDesarrollo && (
        <Contenedor como="section" className="py-12">
          <TituloSeccion antetitulo="Resultados" titulo="Hallazgos clave" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {hallazgos.map(({ valor, texto, resaltado }) => (
              <div
                key={texto}
                className={`rounded-3xl p-6 ${resaltado ? 'bg-marino text-white' : 'border border-marino/10 bg-white'}`}
              >
                <b className={`font-titulo text-4xl ${resaltado ? 'text-cielo' : 'text-oceano'}`}>
                  {valor}
                </b>
                <p className={`mt-2 ${resaltado ? 'text-hielo/90' : 'text-marino/70'}`}>{texto}</p>
              </div>
            ))}
          </div>
        </Contenedor>
      )}

      <Contenedor
        como="nav"
        aria-label="Otros proyectos"
        className="grid gap-4 pt-6 pb-20 sm:grid-cols-2"
      >
        <Link
          to={`/proyecto/${proyectoAnterior.slug}`}
          className="rounded-2xl border border-marino/10 p-5 transition hover:border-oceano hover:bg-hielo/30"
        >
          <span className="text-sm text-marino/60">← Proyecto anterior</span>
          <b className="mt-1 block">{proyectoAnterior.titulo}</b>
        </Link>
        <Link
          to={`/proyecto/${proyectoSiguiente.slug}`}
          className="rounded-2xl border border-marino/10 p-5 text-right transition hover:border-oceano hover:bg-hielo/30"
        >
          <span className="text-sm text-marino/60">Siguiente proyecto →</span>
          <b className="mt-1 block">{proyectoSiguiente.titulo}</b>
        </Link>
      </Contenedor>
    </article>
  );
}
