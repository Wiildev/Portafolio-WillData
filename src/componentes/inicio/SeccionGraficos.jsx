import { lazy } from 'react';
import Contenedor from '../diseno/Contenedor.jsx';
import TituloSeccion from '../ui/TituloSeccion.jsx';
import TarjetaGrafico from '../graficos/TarjetaGrafico.jsx';
import { datosBarras, datosLinea, datosTarta } from '../../datos/graficos.js';

// Recharts se descarga aparte, solo cuando los gráficos entran en pantalla
const GraficoTarta = lazy(() => import('../graficos/GraficoTarta.jsx'));
const GraficoLinea = lazy(() => import('../graficos/GraficoLinea.jsx'));
const GraficoBarras = lazy(() => import('../graficos/GraficoBarras.jsx'));

export default function SeccionGraficos() {
  return (
    <section id="datos" className="bg-gradient-to-b from-hielo/40 to-white py-20">
      <Contenedor>
        <TituloSeccion
          antetitulo="Datos en acción"
          titulo="Así se ve mi trabajo en números"
          descripcion="Un vistazo rápido a cómo distribuyo mi tiempo, cuánto practico y dónde está mi fuerte."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <TarjetaGrafico
            titulo="Uso de herramientas"
            subtitulo="% del tiempo de análisis"
            columnasTabla={['Herramienta', '%']}
            filasTabla={datosTarta.map(({ nombre, valor }) => [nombre, `${valor}%`])}
          >
            <GraficoTarta datos={datosTarta} />
          </TarjetaGrafico>

          <TarjetaGrafico
            titulo="Horas de práctica"
            subtitulo="Acumuladas por mes"
            columnasTabla={['Mes', 'Horas']}
            filasTabla={datosLinea.map(({ mes, horas }) => [mes, horas])}
          >
            <GraficoLinea datos={datosLinea} />
          </TarjetaGrafico>

          <TarjetaGrafico
            titulo="Nivel por habilidad"
            subtitulo="Autoevaluación de 0 a 100"
            columnasTabla={['Habilidad', 'Nivel']}
            filasTabla={datosBarras.map(({ habilidad, nivel }) => [habilidad, nivel])}
          >
            <GraficoBarras datos={datosBarras} />
          </TarjetaGrafico>
        </div>
      </Contenedor>
    </section>
  );
}
