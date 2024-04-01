import {
  MainScreen,
  Servicios,
  Nosotros,
  Clientes,
  Proyectos,
} from "./sections";
const HomePage = () => {
  return (
    <main className="bg-primary-dark">
      <MainScreen />
      <Servicios />
      <Nosotros />
      <Clientes />
      <Proyectos />
    </main>
  );
};

export default HomePage;
