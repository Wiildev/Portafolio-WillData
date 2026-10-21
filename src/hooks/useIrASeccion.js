import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Con HashRouter el "#" lo usa la ruta, así que las secciones se
// alcanzan con scroll. Desde otra página, vuelve al inicio y luego baja.
export function useIrASeccion() {
  const navegar = useNavigate();
  const { pathname: rutaActual } = useLocation();

  return useCallback(
    (idSeccion) => {
      if (rutaActual === '/') {
        document.getElementById(idSeccion)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navegar('/', { state: { seccionDestino: idSeccion } });
      }
    },
    [navegar, rutaActual],
  );
}
