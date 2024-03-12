import "./gallery.example.css";
import { GalleryCardInfo } from "@/components";
import Image1 from "@/assets/gallery-image-1.webp";
import Image2 from "@/assets/gallery-image-2.webp";
import Image3 from "@/assets/gallery-image-3.webp";

const GalleryExample = () => {
  const desc =
    "Almacenaje de productos liquidos (50.000 Ton). Despachos por dia: 120 camiones. Recepción de liquidos 700-1000 Ton por hora.";
  const header = "Nuestras Terminales";

  const images = [
    { src: Image1, header: header, title: "TyS Camiones", description: desc },
    { src: Image2, header: header, title: "Queqúen - ARG", description: desc },
    {
      src: Image3,
      header: header,
      title: "San Nicolas - ARG",
      description: desc,
    },
  ];
  return (
    <section className="gallery-section-container">
      <GalleryCardInfo images={images} />
    </section>
  );
};

export default GalleryExample;
