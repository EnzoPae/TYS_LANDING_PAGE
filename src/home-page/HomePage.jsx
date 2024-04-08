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
    <main className="bg-primary-dark">
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
