import Image from "next/image";
//css module
import classes from "./box.image.module.css";
//models
import { MainRoutesModel } from "@/models";
//components
import { CustomLinkButton } from "../Buttons";

const BoxImage = ({ src, alt, title, text }) => {
  return (
    <div className="w-100 h-100 p-relative">
      <div className={`${classes.box} o-hidden gpl bg-gamma`}>
        <div className="fs-2 fw-bold mb-2">{title}</div>
        <p className="fs-1">{text}</p>
        <CustomLinkButton href={MainRoutesModel.NOSOTROS} className="mt-2 mb-2">
          Saber Más
        </CustomLinkButton>
      </div>
      <div
        className={`${classes.image} p-absolute right-0 o-hidden`}
      >
        <Image
          src={src}
          placeholder="blur"
          alt={alt ? alt : "imagen"}
          width="auto"
          className="img-styles h-100 w-100"
        />
      </div>
    </div>
  );
};

export default BoxImage;
