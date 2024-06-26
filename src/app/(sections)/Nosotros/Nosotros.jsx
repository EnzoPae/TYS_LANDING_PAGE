//models
import { MainRoutesModel } from "@/models";
//components
import { BannerItem } from "@/components";
//images
import image_0000 from "@/images/empresa/0000.webp";

const Nosotros = () => {
  const title = "¿Quienes Somos?";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section>
      <BannerItem
        title={title}
        image={image_0000}
        description={text}
        bgColor="bg-gamma"
        buttonLight
        buttonLabel="Saber Más"
        buttonHref={MainRoutesModel.NOSOTROS}
      />
    </section>
  );
};

export default Nosotros;
