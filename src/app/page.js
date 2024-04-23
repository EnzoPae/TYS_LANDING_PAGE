import {
  Servicios,
  Clientes,
  MainScreen,
  Nosotros,
  PillarPage,
  Proyectos,
} from "./(sections)";

export default function Home() {
  return (
    <main className="bg-alfa">
      <MainScreen />
      <Servicios />
      <Nosotros />
      <Clientes />
      <Proyectos />
      <PillarPage />
    </main>
  );
}
