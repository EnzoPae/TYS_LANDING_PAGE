import classes from "./banners.module.css";
//next js
import Image from "next/image";
//images
import quequen from "@/assets-official/quequen.webp";
import timbues from "@/assets-official/timbues.webp";
//custom components
import { CustomLinkButton } from "@/components";

const ProyectosBanners = () => {
  return (
    <section className="mb-2">
      <article className={classes.banner}>
        <div className={classes.box_text}>
          <div className="gpl gpr">
            <h3 className="mt-1 fs-2 fw-light">
              Investment in Australian Integrated Carbon
            </h3>
            <p className="mt-1 mb-1">
              Rio Tinto has joined Australian Integrated Carbon as a
              shareholder, having completed the acquisition of a 14.15%
              interest.
            </p>
            <CustomLinkButton href="#" black className="mb-1">
              Leer Más
            </CustomLinkButton>
          </div>
        </div>
        <div className={classes.box_image}>
          <Image
            src={quequen}
            alt="image"
            placeholder="blur"
            className="img-styles w-100 h-100"
          />
        </div>
      </article>
      <article className={classes.banner_invert}>
        <div className={classes.box_text}>
          <div className="gpl gpr">
            <h3 className="mt-1 fs-2 fw-light">
              Investment in Australian Integrated Carbon
            </h3>
            <p className="mt-1 mb-1">
              Rio Tinto has joined Australian Integrated Carbon as a
              shareholder, having completed the acquisition of a 14.15%
              interest.
            </p>
            <CustomLinkButton href="#" black className="mb-1">
              Leer Más
            </CustomLinkButton>
          </div>
        </div>
        <div className={classes.box_image}>
          <Image
            src={timbues}
            alt="image"
            placeholder="blur"
            className="img-styles w-100 h-100"
          />
        </div>
      </article>
    </section>
  );
};

export default ProyectosBanners;
