import { useEffect, useRef, useState } from 'react';

// Devuelve [refElemento, estaVisible]. estaVisible pasa a true la primera
// vez que el elemento entra en pantalla (y se queda así).
export function useEnPantalla({ margenRaiz = '0px 0px -15% 0px', umbral = 0.2 } = {}) {
  const refElemento = useRef(null);
  // Sin IntersectionObserver (navegadores muy antiguos) se muestra de inmediato
  const [estaVisible, setEstaVisible] = useState(() => !('IntersectionObserver' in window));

  useEffect(() => {
    const elemento = refElemento.current;
    if (!elemento || estaVisible) return undefined;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstaVisible(true);
          observador.disconnect();
        }
      },
      { rootMargin: margenRaiz, threshold: umbral },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [estaVisible, margenRaiz, umbral]);

  return [refElemento, estaVisible];
}
