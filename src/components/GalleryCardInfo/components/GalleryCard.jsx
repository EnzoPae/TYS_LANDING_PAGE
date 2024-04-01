import classes from "./gallery.card.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

const GalleryCard = ({ previous, next, header, title, description }) => {
  return (
    <aside
      className={`${classes.card} overflow-hidden position-absolute right-0`}
    >
      <header className={`${classes.header} color-gray-dark fs-0-8`}>
        {header}
      </header>
      <div className={`${classes.title} fs-1-2 fw-bold color-secondary`}>
        {title}
      </div>
      <p className={classes.description}>{description}</p>
      <a href="" className={classes.link}>
        Leer más
      </a>
      <div className={`${classes.arrows} flex align-items-center`}>
        <ArrowLeftIcon
          className="pointer"
          color={"#dedede"}
          onClick={previous}
        />
        <ArrowRightIcon className="pointer" color={"#006cff"} onClick={next} />
      </div>
    </aside>
  );
};

export default GalleryCard;
