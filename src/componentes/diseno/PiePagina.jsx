import Contenedor from './Contenedor.jsx';
import Logo from '../ui/Logo.jsx';
import { perfil } from '../../datos/perfil.js';

export default function PiePagina() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-marino text-cielo">
      <Contenedor className="flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <Logo claro />
        <p>
          © {anioActual} {perfil.nombreCompleto} · {perfil.marca}
        </p>
      </Contenedor>
    </footer>
  );
}
