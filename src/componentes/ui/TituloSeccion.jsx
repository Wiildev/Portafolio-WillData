export default function TituloSeccion({
  antetitulo,
  titulo,
  descripcion,
  alineacion = 'izquierda',
}) {
  const claseAlineacion = alineacion === 'centro' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${claseAlineacion}`}>
      {antetitulo && (
        <p className="text-sm font-semibold tracking-[0.12em] text-turquesa uppercase">
          {antetitulo}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{titulo}</h2>
      {descripcion && <p className="mt-3 text-lg leading-relaxed text-marino/70">{descripcion}</p>}
    </div>
  );
}
