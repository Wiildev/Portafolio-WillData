import Contenedor from '../diseno/Contenedor.jsx';
import TituloSeccion from '../ui/TituloSeccion.jsx';
import { perfil } from '../../datos/perfil.js';
import { gruposHabilidades } from '../../datos/habilidades.js';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20">
      <Contenedor className="grid gap-14 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-5">
            <img
              src={perfil.fotoPerfil}
              alt=""
              width="96"
              height="96"
              loading="lazy"
              className="size-24 flex-none rounded-2xl object-cover object-top ring-4 ring-hielo"
            />
            <TituloSeccion antetitulo="Sobre mí" titulo="Curiosidad + datos" />
          </div>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-marino/75">
            <p>
              Soy <strong className="text-marino">{perfil.nombreCompleto}</strong>, de{' '}
              {perfil.ciudad}. Me apasiona transformar datos desordenados en tableros claros que
              ayudan a tomar mejores decisiones.
            </p>
            <p>
              Me especializo en{' '}
              <strong className="text-marino">Business Intelligence con Excel y Power BI</strong>,
              así como en <strong className="text-marino">análisis de datos</strong> y{' '}
              <strong className="text-marino">automatización de proyectos con IA</strong>. Uso la
              inteligencia artificial para agilizar el análisis y optimizar procesos. Aplico lo
              aprendido con proyectos que resuelven problemas de la vida real.
            </p>
          </div>
        </div>

        <div>
          <TituloSeccion antetitulo="Habilidades" titulo="Lo que hago" />
          <div className="mt-6 space-y-6">
            {gruposHabilidades.map(({ titulo, listaHabilidades }) => (
              <div key={titulo}>
                <h3 className="mb-3 text-base font-semibold text-marino/80">{titulo}</h3>
                <ul className="flex flex-wrap gap-2">
                  {listaHabilidades.map(({ nombre, principal }) => (
                    <li
                      key={nombre}
                      className={`rounded-xl px-3.5 py-2 text-sm font-medium ${
                        principal
                          ? 'bg-marino text-white'
                          : 'border border-marino/10 bg-white text-marino/80'
                      }`}
                    >
                      {nombre}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
