//images
import quequen from "@/assets-official/quequen.webp";
//custom components
import { BannerItem } from "@/components";

const ProyectosBanners = () => {
  return (
    <section className="mb-2">
      <BannerItem image={quequen} title="Lorem Ipsum" />
      <BannerItem invert image={quequen} title="Lorem Ipsum" />
    </section>
  );
};

export default ProyectosBanners;
