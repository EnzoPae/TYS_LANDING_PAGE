//images
import image_0000 from "@/images/empresa/0000.webp";
//custom components
import { BannerItem } from "@/components";

const ProyectosBanners = () => {
  return (
    <section className="mb-2">
      <BannerItem image={image_0000} title="Lorem Ipsum" />
      <BannerItem invert image={image_0000} title="Lorem Ipsum" />
    </section>
  );
};

export default ProyectosBanners;
