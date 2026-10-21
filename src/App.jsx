import { Route, Routes } from 'react-router-dom';
import Encabezado from './componentes/diseno/Encabezado.jsx';
import PiePagina from './componentes/diseno/PiePagina.jsx';
import Inicio from './paginas/Inicio.jsx';
import DetalleProyecto from './paginas/DetalleProyecto.jsx';
import NoEncontrado from './paginas/NoEncontrado.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Encabezado />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyecto/:slug" element={<DetalleProyecto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <PiePagina />
    </div>
  );
}
