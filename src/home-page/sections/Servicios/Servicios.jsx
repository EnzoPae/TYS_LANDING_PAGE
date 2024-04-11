//models
import { ServiciosRoutesModel, MainRoutesModel } from "@/models";
//custom components
import { CardSlider } from "@/components";
//images
import timbues from "@/assets-official/timbues.webp";

const Servicios = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const cards = [
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Servicio 1",
      href: ServiciosRoutesModel.SERVICIO_1,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Servicio 2",
      href: ServiciosRoutesModel.SERVICIO_2,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Servicio 3",
      href: ServiciosRoutesModel.SERVICIO_3,
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Servicio 4",
      href: ServiciosRoutesModel.SERVICIO_4,
    },
  ];
  return (
    <section className="gpl">
      <h2 className="fs-2 mt-2 mb-2">SERVICIOS</h2>
      <CardSlider
        cards={cards}
        href={MainRoutesModel.SERVICIOS}
        linkText="Ver todos los Servicios."
      />
    </section>
  );
};

export default Servicios;
