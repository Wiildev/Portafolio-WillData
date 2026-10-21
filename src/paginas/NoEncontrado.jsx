import Contenedor from '../componentes/diseno/Contenedor.jsx';
import Boton from '../componentes/ui/Boton.jsx';

export default function NoEncontrado() {
  return (
    <Contenedor className="py-32 text-center">
      <p className="font-titulo text-7xl font-bold text-cielo">404</p>
      <h1 className="mt-4 text-3xl font-bold">Esta página no existe</h1>
      <p className="mt-3 text-marino/70">
        Puede que el enlace esté mal escrito o que el proyecto se haya movido.
      </p>
      <Boton para="/" className="mt-8">
        Volver al inicio
      </Boton>
    </Contenedor>
  );
}
