import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import InfoEmergente from './InfoEmergente.jsx';
import { useMovimientoReducido } from '../../hooks/useMovimientoReducido.js';

export default function GraficoTarta({ datos }) {
  const movimientoReducido = useMovimientoReducido();

  return (
    <div className="flex h-full items-center gap-4">
      <div className="h-full min-w-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={datos}
              dataKey="valor"
              nameKey="nombre"
              innerRadius="55%"
              outerRadius="90%"
              paddingAngle={2}
              cornerRadius={4}
              stroke="#ffffff"
              strokeWidth={2}
              isAnimationActive={!movimientoReducido}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {datos.map((dato) => (
                <Cell key={dato.nombre} fill={dato.color} />
              ))}
            </Pie>
            <Tooltip content={<InfoEmergente unidad="%" />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Leyenda con valores: la identidad nunca depende solo del color */}
      <ul className="flex-none space-y-2 text-sm">
        {datos.map((dato) => (
          <li key={dato.nombre} className="flex items-center gap-2">
            <span className="size-3 rounded-sm" style={{ backgroundColor: dato.color }} />
            <span className="text-marino/70">{dato.nombre}</span>
            <b className="ml-auto pl-2 tabular-nums">{dato.valor}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
