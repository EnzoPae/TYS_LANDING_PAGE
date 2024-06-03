//models
import { ProyectosRoutesModel, MainRoutesModel } from "@/models";
//custom components
import { CardSlider } from "@/components";
//images
import image_0000 from "@/images/empresa/0000.webp";

const Proyectos = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const cards = [
    {
      src: image_0000,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 1",
      href: ProyectosRoutesModel.PROYECTO_1,
    },
    {
      src: image_0000,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 2",
      href: ProyectosRoutesModel.PROYECTO_2,
    },
    {
      src: image_0000,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 3",
      href: ProyectosRoutesModel.PROYECTO_3,
    },
    {
      src: image_0000,
      alt: "img",
      desc: desc,
      footerTitle: "Proyecto 4",
      href: ProyectosRoutesModel.PROYECTO_4,
    },
  ];
  return (
    <section className="gpl" style={{ paddingBottom: 100, paddingTop: 100 }}>
      <h2 className="fs-2 mt-2 mb-2">PROYECTOS</h2>
      <CardSlider
        cards={cards}
        href={MainRoutesModel.PROYECTOS}
        linkText="Ver todos los Proyectos."
      />
    </section>
  );
};

export default Proyectos;
