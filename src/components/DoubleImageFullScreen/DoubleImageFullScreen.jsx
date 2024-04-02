import Image from "next/image";
import classes from "./styles.module.css";

const DoubleImageFullScreen = ({ image, title, subtitle }) => {
  return (
    <div className="h-100-vh w-100 bg-primary flex align-items-center position-relative">
      <Image
        src={image}
        alt="quequen opacity"
        width="auto"
        placeholder="blur"
        className="img-styles h-100 w-100 position-absolute"
        style={{ opacity: "35%" }}
      />
      <Image
        src={image}
        alt="quequen"
        width="auto"
        className={`${classes.front_image} img-styles position-absolute right-0 g-p-right`}
      />
      <div className="hero g-p-left g-p-right z-index-positive">
        <h1 className="fs-2 mb-2">{title ? title : ""}</h1>
        <h2 className={`${classes.subtitle} fs-4`}>
          {subtitle ? subtitle : ""}
        </h2>
      </div>
    </div>
  );
};

export default DoubleImageFullScreen;
