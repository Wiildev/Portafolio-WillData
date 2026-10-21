import { useState } from 'react';
import Contenedor from '../diseno/Contenedor.jsx';
import TituloSeccion from '../ui/TituloSeccion.jsx';
import TarjetaProyecto from './TarjetaProyecto.jsx';
import { listaProyectos } from '../../datos/proyectos.js';

const opcionesFiltro = [
  { clave: 'todos', texto: 'Todos' },
  { clave: 'pbi', texto: 'Power BI' },
  { clave: 'xls', texto: 'Excel' },
  { clave: 'gs', texto: 'Google Sheets' },
  { clave: 'py', texto: 'Python' },
];

export default function SeccionProyectos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const proyectosFiltrados =
    filtroActivo === 'todos'
      ? listaProyectos
      : listaProyectos.filter((proyecto) => proyecto.herramienta === filtroActivo);

  return (
    <section id="proyectos" className="py-20">
      <Contenedor>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <TituloSeccion antetitulo="Portafolio" titulo="Proyectos" />

          <div
            role="group"
            aria-label="Filtrar proyectos"
            className="flex flex-wrap gap-1 rounded-xl bg-hielo/60 p-1"
          >
            {opcionesFiltro.map(({ clave, texto }) => {
              const estaActivo = filtroActivo === clave;
              return (
                <button
                  key={clave}
                  type="button"
                  aria-pressed={estaActivo}
                  onClick={() => setFiltroActivo(clave)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    estaActivo ? 'bg-white text-marino shadow-sm' : 'text-oceano hover:text-marino'
                  }`}
                >
                  {texto}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {proyectosFiltrados.map((proyecto) => (
            <TarjetaProyecto key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
