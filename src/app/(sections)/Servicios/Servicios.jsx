//models
import { MainRoutesModel, ServiciosModel } from "@/models";
//custom components
import { CardSlider } from "@/components";
//images
import timbues from "@/assets-official/timbues.webp";

const Servicios = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const cards = [
    {
      src: ServiciosModel.IngresoDeGranelesLiquidos.image,
      desc: desc,
      footerTitle: ServiciosModel.IngresoDeGranelesLiquidos.name,
      href: "#",
    },
    {
      src: ServiciosModel.IngresoDeGranelesEnDeposito.image,
      desc: desc,
      footerTitle: ServiciosModel.IngresoDeGranelesEnDeposito.name,
      href: "#",
    },
    {
      src: ServiciosModel.EstibaDesestibaDeGranos.image,
      desc: desc,
      footerTitle: ServiciosModel.EstibaDesestibaDeGranos.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeUreaTratada.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeUreaTratada.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesLiquidos.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeGranelesLiquidos.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesEnSistemasFijos.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeGranelesEnSistemasFijos.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesEnBolsones.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeGranelesEnBolsones.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesEmbolsados.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeGranelesEmbolsados.name,
      href: "#",
    },
    {
      src: ServiciosModel.DespachoDeGranelesConZaranda.image,
      desc: desc,
      footerTitle: ServiciosModel.DespachoDeGranelesConZaranda.name,
      href: "#",
    },
    {
      src: ServiciosModel.DesestibaDeBuques.image,
      desc: desc,
      footerTitle: ServiciosModel.DesestibaDeBuques.name,
      href: "#",
    },
    {
      src: timbues,
      desc: desc,
      footerTitle: ServiciosModel.DesestibaDeBarcazas.name,
      href: "#",
    },
    {
      src: ServiciosModel.CargaDeProyectos.image,
      desc: desc,
      footerTitle: ServiciosModel.CargaDeProyectos.name,
      href: "#",
    },
    {
      src: ServiciosModel.CargaDeFormacionesFerroviarias.image,
      desc: desc,
      footerTitle: ServiciosModel.CargaDeFormacionesFerroviarias.name,
      href: "#",
    },
    {
      src: ServiciosModel.AlmacenajeDeGranelesLiquidos.image,
      desc: desc,
      footerTitle: ServiciosModel.AlmacenajeDeGranelesLiquidos.name,
      href: "#",
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
