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
      href: ProyectosRoutesModel.PROYECTO_1,
    },
    {
      src: quequen,
      title: "Proyecto 2",
      description: desc,
      href: ProyectosRoutesModel.PROYECTO_2,
    },
    {
      src: quequen,
      title: "Proyecto 3",
      description: desc,
      href: ProyectosRoutesModel.PROYECTO_3,
    },
    {
      src: quequen,
      title: "Proyecto 4",
      description: desc,
      href: ProyectosRoutesModel.PROYECTO_4,
    },
  ];
  return (
    <section className="gpl gpr mb-3 mt-3">
      <CardsGrid items={projects} />
    </section>
  );
};

export default ProyectosListado;
