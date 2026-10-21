// Ancho máximo y márgenes laterales comunes a todas las secciones
export default function Contenedor({ como: Etiqueta = 'div', className = '', children, ...resto }) {
  return (
    <Etiqueta className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`} {...resto}>
      {children}
    </Etiqueta>
  );
}
