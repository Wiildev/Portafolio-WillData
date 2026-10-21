import { Link } from 'react-router-dom';

const estilosVariante = {
  primario: 'bg-marino text-white hover:bg-oceano shadow-lg shadow-marino/20',
  acento: 'bg-turquesa text-marino hover:bg-cielo shadow-lg shadow-turquesa/30',
  secundario: 'border border-marino/15 bg-white text-marino hover:border-oceano hover:text-oceano',
  contorno: 'border border-white/40 text-white hover:bg-white/10',
};

const estiloBase =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5';

// Botón polimórfico: <Link> para rutas internas, <a> para enlaces y <button> para acciones
export default function Boton({
  variante = 'primario',
  para,
  href,
  externo = false,
  className = '',
  children,
  ...resto
}) {
  const clases = `${estiloBase} ${estilosVariante[variante]} ${className}`;

  if (para) {
    return (
      <Link to={para} className={clases} {...resto}>
        {children}
      </Link>
    );
  }

  if (href) {
    const atributosExternos = externo ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={clases} {...atributosExternos} {...resto}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={clases} {...resto}>
      {children}
    </button>
  );
}
