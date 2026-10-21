import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import InfoEmergente from './InfoEmergente.jsx';
import { coloresPaleta } from '../../datos/graficos.js';
import { useMovimientoReducido } from '../../hooks/useMovimientoReducido.js';

const estiloEje = { fontSize: 12, fill: '#03045e99' };

export default function GraficoBarras({ datos }) {
  const movimientoReducido = useMovimientoReducido();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={datos}
        margin={{ top: 8, right: 4, left: -18, bottom: 0 }}
        barCategoryGap="28%"
      >
        <CartesianGrid vertical={false} stroke="#03045e14" />
        <XAxis
          dataKey="habilidad"
          tickLine={false}
          axisLine={false}
          tick={estiloEje}
          interval={0}
        />
        <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tick={estiloEje} />
        <Tooltip content={<InfoEmergente unidad="/100" />} cursor={{ fill: '#caf0f866' }} />
        <Bar
          dataKey="nivel"
          name="Nivel"
          fill={coloresPaleta.oceano}
          radius={[4, 4, 0, 0]}
          isAnimationActive={!movimientoReducido}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
