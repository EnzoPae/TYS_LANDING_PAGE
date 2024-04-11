import {
  MainScreen,
  Servicios,
  Nosotros,
  Clientes,
  Proyectos,
  PillarPage,
} from "./sections";
const HomePage = () => {
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
};

export default HomePage;
