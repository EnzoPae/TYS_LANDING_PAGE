import {
  MainScreen,
  Servicios,
  Nosotros,
  Clientes,
  Proyectos,
} from "./sections";
const HomePage = () => {
  return (
    <main>
      <MainScreen />
      <Servicios />
      <Nosotros />
      <Clientes />
      <Proyectos />
    </main>
  );
};

export default HomePage;
