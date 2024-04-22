import { CardsGrid } from "@/components";
import timbues from "@/assets-official/timbues.webp";
import { ServiciosModel } from "@/models";

const ServiciosListado = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const services = [
    {
      src: ServiciosModel.IngresoDeGranelesLiquidos.image,
      title: ServiciosModel.IngresoDeGranelesLiquidos.name,
      description: desc,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeUreaTratada.image,
      title: ServiciosModel.DespachoDeUreaTratada.name,
      description: desc,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesLiquidos.image,
      title: ServiciosModel.DespachoDeGranelesLiquidos.name,
      description: desc,
      href: "#",
    },
    {
      src: timbues,
      title: ServiciosModel.DespachoDeGranelesEnSistemasFijos.name,
      description: desc,
      href: "#",
    },
    {
      src: timbues,
      title: ServiciosModel.DespachoDeGranelesEnBolsones.name,
      description: desc,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesEmbolsados.image,
      title: ServiciosModel.DespachoDeGranelesEmbolsados.name,
      description: desc,
      href: "#",
    },
    {
      src: ServiciosModel.DesestibaDeBuques.image,
      title: ServiciosModel.DesestibaDeBuques.name,
      description: desc,
      href: "#",
    },
    {
      src: timbues,
      title: ServiciosModel.DesestibaDeBarcazas.name,
      description: desc,
      href: "#",
    },
    {
      src: ServiciosModel.CargaDeProyectos.image,
      title: ServiciosModel.CargaDeProyectos.name,
      description: desc,
      href: "#",
    },
  ];
  return (
    <section className="gpl gpr mb-3 mt-3">
      <CardsGrid items={services} />
    </section>
  );
};

export default ServiciosListado;
