import { Suspense } from 'react';
import { useEnPantalla } from '../../hooks/useEnPantalla.js';

// Marco común: título y gráfico (que solo se monta al entrar en pantalla
// para que la animación se vea).
export default function TarjetaGrafico({ titulo, subtitulo, children }) {
  const [refTarjeta, estaVisible] = useEnPantalla();

  return (
    <figure
      ref={refTarjeta}
      className={`flex flex-col rounded-3xl border border-marino/10 bg-white p-6 shadow-lg shadow-marino/5 transition duration-700 ${
        estaVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <figcaption>
        <h3 className="text-lg font-bold">{titulo}</h3>
        <p className="text-sm text-marino/60">{subtitulo}</p>
      </figcaption>

      <div className="mt-4 h-64">
        {estaVisible && (
          <Suspense fallback={<div className="h-full animate-pulse rounded-2xl bg-hielo/40" />}>
            {children}
          </Suspense>
        )}
      </div>
    </figure>
  );
}
