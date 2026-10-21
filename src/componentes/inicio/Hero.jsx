import Contenedor from '../diseno/Contenedor.jsx';
import Boton from '../ui/Boton.jsx';
import { perfil, herramientasPrincipales } from '../../datos/perfil.js';
import { esEnlacePendiente, listaProyectos } from '../../datos/proyectos.js';
import { useIrASeccion } from '../../hooks/useIrASeccion.js';

const alturasMiniGrafico = [35, 52, 44, 68, 92, 76];

export default function Hero() {
  const irASeccion = useIrASeccion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-hielo/50 via-white to-white"
    >
      {/* Círculos decorativos de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-cielo/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-80 rounded-full bg-turquesa/10 blur-3xl"
      />

      <Contenedor className="relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-aparecer">
          {perfil.disponible && (
            <p className="inline-flex items-center gap-2 rounded-full border border-oceano/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-oceano">
              <span className="size-2 rounded-full bg-turquesa shadow-[0_0_0_4px] shadow-turquesa/25" />
              Disponible para nuevas oportunidades
            </p>
          )}

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-oceano to-turquesa bg-clip-text text-transparent">
              {perfil.nombreCompleto}
            </span>
            .<br />
            Convierto datos en decisiones.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-marino/70">
            Analista de datos enfocado en Business Intelligence. Uso Excel, Power BI e inteligencia
            artificial para encontrar y contar historias a partir de los datos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Boton onClick={() => irASeccion('proyectos')}>Ver proyectos →</Boton>
            {!esEnlacePendiente(perfil.urlCv) && (
              <Boton variante="secundario" href={perfil.urlCv} externo>
                Descargar CV ↓
              </Boton>
            )}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Herramientas">
            {herramientasPrincipales.map((herramienta) => (
              <li
                key={herramienta}
                className="rounded-lg bg-hielo/60 px-3 py-1 text-sm font-medium text-oceano"
              >
                {herramienta}
              </li>
            ))}
          </ul>
        </div>

        {/* Foto + tarjetas flotantes */}
        <div className="relative mx-auto w-full max-w-sm animate-aparecer [animation-delay:150ms] lg:max-w-md">
          <div
            className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-turquesa to-marino opacity-90"
            aria-hidden="true"
          />
          <img
            src={perfil.fotoPerfil}
            alt={`${perfil.nombreCompleto}, analista de datos`}
            width="768"
            height="1024"
            fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-marino/30"
          />

          <div
            className="absolute -bottom-8 -left-4 w-52 animate-flotar rounded-2xl border border-marino/10 bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-10"
            aria-hidden="true"
          >
            <div className="flex justify-between text-[11px] font-medium text-marino/60">
              <span>Proyectos</span>
              <span>2026</span>
            </div>
            <p className="font-titulo text-3xl font-bold">
              {listaProyectos.length}
              <small className="ml-1.5 font-sans text-xs font-semibold text-turquesa">
                ▲ portafolio
              </small>
            </p>
            <div className="mt-3 flex h-14 items-end gap-1.5 border-b border-marino/10">
              {alturasMiniGrafico.map((altura, indice) => (
                <span
                  key={indice}
                  style={{ height: `${altura}%`, animationDelay: `${indice * 90}ms` }}
                  className={`flex-1 origin-bottom animate-crecer rounded-t ${indice === 4 ? 'bg-turquesa' : 'bg-marino'}`}
                />
              ))}
            </div>
          </div>

          <div
            className="absolute -top-4 -right-3 animate-flotar rounded-2xl bg-marino px-4 py-3 text-white shadow-xl [animation-delay:1.5s] sm:-right-8"
            aria-hidden="true"
          >
            <p className="text-[11px] text-cielo">Insights</p>
            <p className="font-titulo text-xl font-bold">Power BI · Excel</p>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
