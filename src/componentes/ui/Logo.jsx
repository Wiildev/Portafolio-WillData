import { Link } from 'react-router-dom';
import { perfil } from '../../datos/perfil.js';

const alturasBarras = ['h-[40%]', 'h-[70%]', 'h-full'];

export default function Logo({ claro = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${perfil.marca}, ir al inicio`}>
      <span className="flex size-10 flex-none items-end justify-center gap-[3px] rounded-xl bg-marino p-2.5">
        {alturasBarras.map((claseAltura, indice) => (
          <i
            key={claseAltura}
            className={`w-1.5 rounded-sm ${claseAltura} ${indice === 2 ? 'bg-turquesa' : 'bg-cielo'}`}
          />
        ))}
      </span>
      <span className="leading-tight">
        <b className={`block font-titulo text-lg ${claro ? 'text-white' : 'text-marino'}`}>
          {perfil.marca}
        </b>
        <span className={`text-xs font-medium ${claro ? 'text-cielo' : 'text-marino/60'}`}>
          {perfil.rol}
        </span>
      </span>
    </Link>
  );
}
