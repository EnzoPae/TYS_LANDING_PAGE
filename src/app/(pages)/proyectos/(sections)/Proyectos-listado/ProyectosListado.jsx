import { CardsGrid } from "@/components";
import quequen from "@/assets-official/quequen.webp";
import { ProyectosRoutesModel } from "@/models";

const ProyectosListado = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const projects = [
    {
      src: quequen,
      title: "Proyecto 1",
      description: desc,
      href: ProyectosRoutesModel.SERVICIO_1,
    },
    {
      src: quequen,
      title: "Proyecto 2",
      description: desc,
      href: ProyectosRoutesModel.SERVICIO_2,
    },
    {
      src: quequen,
      title: "Proyecto 3",
      description: desc,
      href: ProyectosRoutesModel.SERVICIO_3,
    },
    {
      src: quequen,
      title: "Proyecto 4",
      description: desc,
      href: ProyectosRoutesModel.SERVICIO_4,
    },
  ];
  return (
    <section className="gpl gpr mb-2">
      <h3 className="fs-4 mt-2">Proyectos</h3>
      <p className="fs-1-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <CardsGrid items={projects} />
    </section>
  );
};

export default ProyectosListado;
