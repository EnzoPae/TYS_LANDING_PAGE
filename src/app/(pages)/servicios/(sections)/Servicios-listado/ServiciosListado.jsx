import { CardsGrid } from "@/components";
import timbues from "@/assets-official/timbues.webp";
import { ServiciosRoutesModel } from "@/models";

const ServiciosListado = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const services = [
    {
      src: timbues,
      title: "Servicio 1",
      description: desc,
      href: ServiciosRoutesModel.SERVICIO_1,
    },
    {
      src: timbues,
      title: "Servicio 2",
      description: desc,
      href: ServiciosRoutesModel.SERVICIO_2,
    },
    {
      src: timbues,
      title: "Servicio 3",
      description: desc,
      href: ServiciosRoutesModel.SERVICIO_3,
    },
    {
      src: timbues,
      title: "Servicio 4",
      description: desc,
      href: ServiciosRoutesModel.SERVICIO_4,
    },
  ];
  return (
    <section className="gpl gpr mb-2">
      <h3 className="fs-4 mt-2">Servicios</h3>
      <p className="fs-1-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <CardsGrid items={services} />
    </section>
  );
};

export default ServiciosListado;
