import "./gallery.example2.css";
import { GalleryBasic } from "@/components";
import Image1 from "@/assets/gallery-image-1.webp";
import Image2 from "@/assets/gallery-image-2.webp";
import Image3 from "@/assets/gallery-image-3.webp";

const GalleryExample2 = () => {
  const images = [Image1, Image2, Image3];
  return (
    <section className="gallery2-section-container">
      <GalleryBasic images={images} />
    </section>
  );
};

export default GalleryExample2;
