//models
import { ProyectosRoutesModel, MainRoutesModel } from "@/models";
//custom components
import { CardSlider } from "@/components";
//images
import timbues from "@/assets-official/timbues.webp";

const Proyectos = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const cards = [
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 1",
      href: ProyectosRoutesModel.PROYECTO_1,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 2",
      href: ProyectosRoutesModel.PROYECTO_2,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 3",
      href: ProyectosRoutesModel.PROYECTO_3,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 4",
      href: ProyectosRoutesModel.PROYECTO_4,
    },
  ];
  return (
    <section
      className="global-padding-left bg-primary-dark"
      style={{ paddingBottom: 100, paddingTop: 100 }}
    >
      <h2>PROYECTOS</h2>
      <CardSlider
        cards={cards}
        href={MainRoutesModel.PROYECTOS}
        linkText="Ver todos los Proyectos."
      />
    </section>
  );
};

export default Proyectos;
