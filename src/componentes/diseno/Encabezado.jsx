import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Contenedor from './Contenedor.jsx';
import Logo from '../ui/Logo.jsx';
import Boton from '../ui/Boton.jsx';
import { useIrASeccion } from '../../hooks/useIrASeccion.js';

const enlacesNavegacion = [
  { idSeccion: 'inicio', texto: 'Inicio' },
  { idSeccion: 'proyectos', texto: 'Proyectos' },
  { idSeccion: 'datos', texto: 'Datos' },
  { idSeccion: 'sobre-mi', texto: 'Sobre mí' },
];

export default function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { pathname: rutaActual } = useLocation();
  const irASeccion = useIrASeccion();
  const esPaginaProyecto = rutaActual.startsWith('/proyecto/');

  function navegarA(idSeccion) {
    setMenuAbierto(false);
    irASeccion(idSeccion);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-marino/10 bg-white/85 backdrop-blur-md">
      <Contenedor className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        {esPaginaProyecto ? (
          <Boton
            variante="secundario"
            para="/"
            state={{ seccionDestino: 'proyectos' }}
            className="py-2 text-sm"
          >
            ← Volver a proyectos
          </Boton>
        ) : (
          <>
            <button
              type="button"
              className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-marino/15 md:hidden"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
              aria-controls="menu-principal"
              onClick={() => setMenuAbierto((estadoPrevio) => !estadoPrevio)}
            >
              <span
                className={`h-0.5 w-5 rounded bg-marino transition ${menuAbierto ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`h-0.5 w-5 rounded bg-marino transition ${menuAbierto ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 w-5 rounded bg-marino transition ${menuAbierto ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </button>

            <nav
              id="menu-principal"
              aria-label="Principal"
              className={`${menuAbierto ? 'flex' : 'hidden'} absolute inset-x-0 top-[72px] flex-col gap-1 border-b border-marino/10 bg-white p-4 shadow-xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            >
              {enlacesNavegacion.map(({ idSeccion, texto }) => (
                <button
                  key={idSeccion}
                  type="button"
                  onClick={() => navegarA(idSeccion)}
                  className="rounded-lg px-3 py-2.5 text-left text-[15px] font-medium text-marino/70 transition hover:bg-hielo/60 hover:text-marino md:py-2 md:text-sm"
                >
                  {texto}
                </button>
              ))}
              <Boton
                variante="primario"
                onClick={() => navegarA('contacto')}
                className="mt-2 py-2.5 text-sm md:mt-0 md:ml-2"
              >
                Contáctame
              </Boton>
            </nav>
          </>
        )}
      </Contenedor>
    </header>
  );
}
