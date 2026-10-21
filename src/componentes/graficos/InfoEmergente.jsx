// Tooltip personalizado para los gráficos de Recharts
export default function InfoEmergente({
  active: estaActivo,
  payload: listaValores,
  label: etiqueta,
  unidad = '',
}) {
  if (!estaActivo || !listaValores?.length) return null;

  const [{ name: nombreSerie, value: valor, payload: datoOriginal }] = listaValores;
  const colorMarca = datoOriginal?.color ?? '#0077b6';

  return (
    <div className="rounded-xl border border-marino/10 bg-white px-3 py-2 text-sm shadow-lg">
      <p className="font-semibold text-marino">{etiqueta ?? nombreSerie}</p>
      <p className="flex items-center gap-2 text-marino/70">
        <span className="size-2.5 rounded-full" style={{ backgroundColor: colorMarca }} />
        <span className="tabular-nums">
          {valor}
          {unidad}
        </span>
      </p>
    </div>
  );
}
