import "./utils.css";
import Image from "next/image";
import ArrowLeft from "@/assets/arrow-left.svg";
import ArrowRight from "@/assets/arrow-right.svg";

const GalleryCard = ({ previous, next, header, title, description }) => {
  return (
    <aside className="gallery-card">
      <header>{header}</header>
      <div className="title">{title}</div>
      <p>{description}</p>
      <a href="#">Leer más</a>
      <div className="arrows">
        <Image
          src={ArrowLeft}
          alt="icono de flecha izquierda"
          width={25}
          onClick={previous}
        />
        <Image
          src={ArrowRight}
          alt="icono de flecha derecha"
          width={25}
          onClick={next}
        />
      </div>
    </aside>
  );
};

export default GalleryCard;
