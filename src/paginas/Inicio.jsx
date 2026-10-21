import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../componentes/inicio/Hero.jsx';
import SeccionProyectos from '../componentes/inicio/SeccionProyectos.jsx';
import SeccionGraficos from '../componentes/inicio/SeccionGraficos.jsx';
import SobreMi from '../componentes/inicio/SobreMi.jsx';
import Contacto from '../componentes/inicio/Contacto.jsx';
import { perfil } from '../datos/perfil.js';

export default function Inicio() {
  const { state: estadoNavegacion } = useLocation();
  const seccionDestino = estadoNavegacion?.seccionDestino;

  useEffect(() => {
    document.title = `${perfil.marca} · ${perfil.nombreCompleto}`;
  }, []);

  // Al volver desde un proyecto, baja a la sección pedida
  useEffect(() => {
    if (seccionDestino) {
      document.getElementById(seccionDestino)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [seccionDestino]);

  return (
    <>
      <Hero />
      <SeccionProyectos />
      <SeccionGraficos />
      <SobreMi />
      <Contacto />
    </>
  );
}
