import { useSyncExternalStore } from 'react';

const consultaMedios = '(prefers-reduced-motion: reduce)';

function suscribirse(alCambiar) {
  const listaMedios = window.matchMedia(consultaMedios);
  listaMedios.addEventListener('change', alCambiar);
  return () => listaMedios.removeEventListener('change', alCambiar);
}

function obtenerValor() {
  return window.matchMedia(consultaMedios).matches;
}

// true si la persona pidió reducir animaciones en su sistema operativo
export function useMovimientoReducido() {
  return useSyncExternalStore(suscribirse, obtenerValor, () => false);
}
