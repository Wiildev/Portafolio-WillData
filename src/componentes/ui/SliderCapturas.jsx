import { useEffect, useRef, useState } from 'react';
import { useMovimientoReducido } from '../../hooks/useMovimientoReducido.js';

const rutaBase = import.meta.env.BASE_URL;
const intervaloAutomatico = 5000;
const distanciaMinimaDeslizar = 50;

// Muestra una lista de capturas con flechas, pestañas, teclado y gesto de deslizar
export default function SliderCapturas({ capturas, titulo }) {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [enPausa, setEnPausa] = useState(false);
  const movimientoReducido = useMovimientoReducido();
  const inicioToque = useRef(null);
  const totalCapturas = capturas.length;

  const irA = (indice) => setIndiceActivo((indice + totalCapturas) % totalCapturas);
  const irAnterior = () => irA(indiceActivo - 1);
  const irSiguiente = () => irA(indiceActivo + 1);

  useEffect(() => {
    if (enPausa || movimientoReducido || totalCapturas < 2) return undefined;
    const temporizador = setTimeout(
      () => setIndiceActivo((indice) => (indice + 1) % totalCapturas),
      intervaloAutomatico,
    );
    return () => clearTimeout(temporizador);
  }, [indiceActivo, enPausa, movimientoReducido, totalCapturas]);

  const alPulsarTecla = (evento) => {
    if (evento.key === 'ArrowLeft') irAnterior();
    if (evento.key === 'ArrowRight') irSiguiente();
  };

  const alTerminarToque = (evento) => {
    if (inicioToque.current === null) return;
    const distancia = evento.changedTouches[0].clientX - inicioToque.current;
    if (distancia > distanciaMinimaDeslizar) irAnterior();
    if (distancia < -distanciaMinimaDeslizar) irSiguiente();
    inicioToque.current = null;
  };

  const claseFlecha =
    'absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-marino shadow-lg shadow-marino/15 transition hover:bg-white hover:text-oceano';

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${titulo}`}
      tabIndex={0}
      onKeyDown={alPulsarTecla}
      onMouseEnter={() => setEnPausa(true)}
      onMouseLeave={() => setEnPausa(false)}
      onFocus={() => setEnPausa(true)}
      onBlur={() => setEnPausa(false)}
      className="rounded-3xl"
    >
      <div className="mb-4 flex flex-wrap gap-1 rounded-xl bg-hielo/60 p-1 sm:inline-flex">
        {capturas.map(({ texto }, indice) => {
          const estaActiva = indice === indiceActivo;
          return (
            <button
              key={texto}
              type="button"
              aria-pressed={estaActiva}
              onClick={() => irA(indice)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                estaActiva ? 'bg-white text-marino shadow-sm' : 'text-oceano hover:text-marino'
              }`}
            >
              {texto}
            </button>
          );
        })}
      </div>

      <div
        className="relative overflow-hidden rounded-3xl border border-marino/10 bg-gradient-to-b from-hielo/40 to-white shadow-xl shadow-marino/10"
        onTouchStart={(evento) => (inicioToque.current = evento.touches[0].clientX)}
        onTouchEnd={alTerminarToque}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${indiceActivo * 100}%)` }}
        >
          {capturas.map(({ url, texto }, indice) => (
            <figure
              key={url}
              aria-roledescription="diapositiva"
              aria-label={`${indice + 1} de ${totalCapturas}: ${texto}`}
              aria-hidden={indice !== indiceActivo}
              className="w-full shrink-0"
            >
              <img
                src={`${rutaBase}${url}`}
                alt={`${titulo}: pantalla ${texto}`}
                className="w-full select-none"
                draggable={false}
                loading={indice === 0 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}
        </div>

        {totalCapturas > 1 && (
          <>
            <button
              type="button"
              onClick={irAnterior}
              aria-label="Captura anterior"
              className={`${claseFlecha} left-3 sm:left-5`}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={irSiguiente}
              aria-label="Captura siguiente"
              className={`${claseFlecha} right-3 sm:right-5`}
            >
              ›
            </button>
          </>
        )}

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {capturas.map(({ texto }, indice) => (
            <button
              key={texto}
              type="button"
              onClick={() => irA(indice)}
              aria-label={`Ver ${texto}`}
              className={`h-2 rounded-full transition-all ${
                indice === indiceActivo ? 'w-8 bg-oceano' : 'w-2 bg-marino/25 hover:bg-marino/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
