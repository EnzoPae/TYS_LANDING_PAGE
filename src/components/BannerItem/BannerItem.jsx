import classes from "./banner.item.module.css";
//next js
import Image from "next/image";
//custom components
import { CustomLinkButton } from "@/components";

const BannerItem = ({ invert, title, description, image }) => {
  return (
    <article className={invert ? classes.banner_invert : classes.banner}>
      <div className={classes.box_text}>
        <div className="gpl gpr">
          <h3 className="mt-1 fs-2 fw-light">{title}</h3>
          <p className="mt-1 mb-1">{description}</p>
          <CustomLinkButton href="#" black className="mb-1">
            Leer Más
          </CustomLinkButton>
        </div>
      </div>
      <div className={classes.box_image}>
        <Image
          src={image}
          alt="image"
          placeholder="blur"
          className="img-styles w-100 h-100"
        />
      </div>
    </article>
  );
};

export default BannerItem;
