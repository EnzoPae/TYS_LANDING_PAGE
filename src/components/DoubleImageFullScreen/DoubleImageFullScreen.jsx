import Image from "next/image";
import classes from "./styles.module.css";

const DoubleImageFullScreen = ({ image, title, subtitle }) => {
  return (
    <div className="h-100-vh w-100 bg-alfa flex align-items-center p-relative">
      <Image
        src={image}
        alt="quequen opacity"
        width="auto"
        placeholder="blur"
        className="img-styles h-100 w-100 p-absolute"
        style={{ opacity: "35%" }}
      />
      <Image
        src={image}
        alt="quequen"
        width="auto"
        className={`${classes.front_image} img-styles p-absolute right-0 gpr`}
      />
      <div className="gpl gpr z-index-10">
        <h1 className="fs-2 mb-2">{title ? title : ""}</h1>
        <h2 className={`${classes.subtitle} fs-4`}>
          {subtitle ? subtitle : ""}
        </h2>
      </div>
    </div>
  );
};

export default DoubleImageFullScreen;
