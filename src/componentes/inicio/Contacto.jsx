import Contenedor from '../diseno/Contenedor.jsx';
import Boton from '../ui/Boton.jsx';
import { esEnlacePendiente } from '../../datos/proyectos.js';
import { perfil } from '../../datos/perfil.js';

export default function Contacto() {
  return (
    <section id="contacto" className="pb-20">
      <Contenedor>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-marino via-marino to-oceano px-6 py-14 text-center text-white sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 size-72 rounded-full bg-turquesa/30 blur-3xl"
          />
          <h2 className="relative text-3xl font-bold sm:text-4xl">¿Hablamos de datos?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-hielo/90">
            Estoy buscando oportunidades como analista de datos o BI. Escríbeme y con gusto
            conversamos.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Boton variante="acento" href={`mailto:${perfil.correo}`}>
              {perfil.correo}
            </Boton>
            <span className="rounded-lg border border-white/30 px-4 py-2.5 text-white">
              3148002915
            </span>
            {!esEnlacePendiente(perfil.urlGithub) && (
              <Boton variante="contorno" href={perfil.urlGithub} externo>
                GitHub
              </Boton>
            )}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
