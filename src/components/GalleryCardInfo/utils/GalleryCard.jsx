import "./utils.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

const GalleryCard = ({ previous, next, header, title, description }) => {
  return (
    <aside className="gallery-card">
      <header>{header}</header>
      <div className="title">{title}</div>
      <p>{description}</p>
      <a href="#">Leer más</a>
      <div className="arrows">
        <ArrowLeftIcon color={"#dedede"} onClick={previous} />
        <ArrowRightIcon color={"#006cff"} onClick={next} />
      </div>
    </aside>
  );
};

export default GalleryCard;
