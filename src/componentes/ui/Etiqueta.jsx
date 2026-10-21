const estilosVariante = {
  neutra: 'bg-hielo/60 text-oceano',
  pbi: 'bg-marino/10 text-marino',
  xls: 'bg-turquesa/15 text-oceano',
  gs: 'bg-cielo/30 text-oceano',
  py: 'bg-oceano/10 text-marino',
  destacada: 'bg-marino text-white',
  clara: 'bg-white/15 text-white',
};

export default function Etiqueta({ variante = 'neutra', children }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${estilosVariante[variante]}`}>
      {children}
    </span>
  );
}
