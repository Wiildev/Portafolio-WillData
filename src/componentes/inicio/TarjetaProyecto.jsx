import { Link } from 'react-router-dom';
import Etiqueta from '../ui/Etiqueta.jsx';
import { tiposHerramienta } from '../../datos/proyectos.js';

const fondosMiniatura = {
  pbi: 'from-marino to-oceano',
  xls: 'from-oceano to-turquesa',
  gs: 'from-turquesa to-oceano',
  py: 'from-marino to-turquesa',
};

function MiniaturaEnDesarrollo() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-3 text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-14 animate-[spin_8s_linear_infinite] text-cielo motion-reduce:animate-none"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase backdrop-blur">
        En desarrollo
      </span>
      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/20">
        <div className="h-full w-2/5 animate-pulse rounded-full bg-cielo" />
      </div>
      <div
        className="absolute -inset-x-6 -bottom-6 h-3 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgb(255 255 255 / 0.5) 0 10px, transparent 10px 20px)',
        }}
      />
    </div>
  );
}

export default function TarjetaProyecto({ proyecto }) {
  const {
    slug,
    herramienta,
    destacado,
    enDesarrollo,
    titulo,
    resumen,
    etiquetas,
    alturasMiniatura,
  } = proyecto;
  const alturaMaxima = Math.max(...alturasMiniatura);

  return (
    <Link
      to={`/proyecto/${slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-marino/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-marino/15"
    >
      <div
        role={enDesarrollo ? 'img' : undefined}
        aria-label={enDesarrollo ? 'Proyecto en desarrollo' : undefined}
        aria-hidden={enDesarrollo ? undefined : 'true'}
        className={`flex h-48 items-end gap-2 bg-gradient-to-br p-6 ${fondosMiniatura[herramienta]}`}
      >
        {enDesarrollo ? (
          <div className="h-full w-full">
            <MiniaturaEnDesarrollo />
          </div>
        ) : (
          alturasMiniatura.map((altura, indice) => (
            <i
              key={indice}
              style={{ height: `${altura}%` }}
              className={`flex-1 origin-bottom rounded-t transition-transform duration-500 group-hover:scale-y-110 ${
                altura === alturaMaxima ? 'bg-cielo' : 'bg-white/25'
              }`}
            />
          ))
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-1.5">
          {destacado && <Etiqueta variante="destacada">★ Proyecto independiente</Etiqueta>}
          <Etiqueta variante={herramienta}>{tiposHerramienta[herramienta].nombre}</Etiqueta>
          {etiquetas.map((etiqueta) => (
            <Etiqueta key={etiqueta}>{etiqueta}</Etiqueta>
          ))}
        </div>
        <h3 className="text-xl font-bold">{titulo}</h3>
        <p className="leading-relaxed text-marino/70">{resumen}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-oceano transition group-hover:text-turquesa">
          {destacado ? 'Ver caso de estudio →' : 'Ver proyecto →'}
        </span>
      </div>
    </Link>
  );
}
