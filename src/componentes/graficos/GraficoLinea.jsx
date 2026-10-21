import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import InfoEmergente from './InfoEmergente.jsx';
import { coloresPaleta } from '../../datos/graficos.js';
import { useMovimientoReducido } from '../../hooks/useMovimientoReducido.js';

const estiloEje = { fontSize: 12, fill: '#03045e99' };

export default function GraficoLinea({ datos }) {
  const movimientoReducido = useMovimientoReducido();
  const indiceUltimo = datos.length - 1;

  // Solo se etiqueta el último punto (el valor actual)
  function renderizarEtiquetaFinal({ x, y, value: valor, index: indice }) {
    if (indice !== indiceUltimo) return null;
    return (
      <text
        x={x}
        y={y - 12}
        textAnchor="end"
        fontSize={12}
        fontWeight={600}
        fill={coloresPaleta.marino}
      >
        {valor} h
      </text>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={datos} margin={{ top: 20, right: 12, left: -18, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#03045e14" />
        <XAxis dataKey="mes" tickLine={false} axisLine={false} tick={estiloEje} />
        <YAxis tickLine={false} axisLine={false} tick={estiloEje} />
        <Tooltip
          content={<InfoEmergente unidad=" h" />}
          cursor={{ stroke: coloresPaleta.cielo, strokeWidth: 1 }}
        />
        <Line
          type="monotone"
          dataKey="horas"
          name="Horas"
          stroke={coloresPaleta.oceano}
          strokeWidth={2}
          dot={{ r: 4, fill: coloresPaleta.oceano, stroke: '#ffffff', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: coloresPaleta.turquesa, stroke: '#ffffff', strokeWidth: 2 }}
          isAnimationActive={!movimientoReducido}
          animationDuration={1500}
          animationEasing="ease-out"
        >
          <LabelList dataKey="horas" content={renderizarEtiquetaFinal} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
