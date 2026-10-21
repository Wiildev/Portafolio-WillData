import { Suspense, useState } from 'react';
import { useEnPantalla } from '../../hooks/useEnPantalla.js';

// Marco común: título, gráfico (que solo se monta al entrar en pantalla
// para que la animación se vea) y una vista de tabla accesible.
export default function TarjetaGrafico({ titulo, subtitulo, columnasTabla, filasTabla, children }) {
  const [refTarjeta, estaVisible] = useEnPantalla();
  const [verTabla, setVerTabla] = useState(false);

  return (
    <figure
      ref={refTarjeta}
      className={`flex flex-col rounded-3xl border border-marino/10 bg-white p-6 shadow-lg shadow-marino/5 transition duration-700 ${
        estaVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <figcaption className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{titulo}</h3>
          <p className="text-sm text-marino/60">{subtitulo}</p>
        </div>
        <button
          type="button"
          onClick={() => setVerTabla((estadoPrevio) => !estadoPrevio)}
          aria-pressed={verTabla}
          className="flex-none rounded-lg px-2.5 py-1 text-xs font-semibold text-oceano transition hover:bg-hielo/60"
        >
          {verTabla ? 'Ver gráfico' : 'Ver tabla'}
        </button>
      </figcaption>

      <div className="mt-4 h-64">
        {verTabla ? (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-marino/10 text-marino/60">
                {columnasTabla.map((columna) => (
                  <th key={columna} className="py-2 font-medium">
                    {columna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filasTabla.map((fila) => (
                <tr key={fila[0]} className="border-b border-marino/5">
                  {fila.map((celda, indice) => (
                    <td key={indice} className="py-1.5 tabular-nums">
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          estaVisible && (
            <Suspense fallback={<div className="h-full animate-pulse rounded-2xl bg-hielo/40" />}>
              {children}
            </Suspense>
          )
        )}
      </div>
    </figure>
  );
}
