//models
import { ServiciosModel } from "@/models";
//custom components
import { BannerItem } from "@/components";

const ServiciosBanners = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <section className="mb-2">
      <BannerItem
        title={ServiciosModel.EstibaDesestibaDeGranos.name}
        image={ServiciosModel.EstibaDesestibaDeGranos.image}
        description={desc}
      />
      <BannerItem
        invert
        image={ServiciosModel.IngresoDeGranelesEnDeposito.image}
        title={ServiciosModel.IngresoDeGranelesEnDeposito.name}
        description={desc}
      />
      <BannerItem
        title={ServiciosModel.DespachoDeGranelesConZaranda.name}
        image={ServiciosModel.DespachoDeGranelesConZaranda.image}
        description={desc}
      />
      <BannerItem
        invert
        image={ServiciosModel.AlmacenajeDeGranelesLiquidos.image}
        title={ServiciosModel.AlmacenajeDeGranelesLiquidos.name}
        description={desc}
      />
      <BannerItem
        title={ServiciosModel.CargaDeFormacionesFerroviarias.name}
        image={ServiciosModel.CargaDeFormacionesFerroviarias.image}
        description={desc}
      />
    </section>
  );
};

export default ServiciosBanners;
