import classes from "./info.images.module.css";
import Image from "next/image";
import image_0002 from "@/assets/0002.webp";
import image_0003 from "@/assets/0003.webp";
import image_0004 from "@/assets/0004.webp";

const InfoWithImages = () => {
  return (
    <section className="bg-alfa gpl gpr pt-3 pb-3">
      <div className={classes.wrapper}>
        <article className={`${classes.card} p-relative`}>
          <Image
            src={image_0003}
            alt="image"
            width="auto"
            className="img-styles w-100 h-100"
          />
          <div className={`${classes.box_info} p-absolute w-100`}>
            <header className="fw-semibold fs-1-2 pb-1">
              <strong className="c-primary">Compromiso</strong> con la
              sostenibilidad.
            </header>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore.
            </p>
          </div>
        </article>
        <article className={`${classes.card} p-relative`}>
          <Image
            src={image_0002}
            alt="image"
            width="auto"
            className="img-styles w-100 h-100"
          />
          <div className={`${classes.box_info} p-absolute w-100`}>
            <header className="fw-semibold fs-1-2 pb-1">
              <strong className="c-primary">Líder</strong> en innovación y
              eficiencia empresarial.
            </header>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </article>
        <article className={`${classes.card} p-relative`}>
          <Image
            src={image_0004}
            alt="image"
            width="auto"
            className="img-styles w-100 h-100"
          />
          <div className={`${classes.box_info} p-absolute w-100`}>
            <header className="fw-semibold fs-1-2 pb-1">
              <strong className="c-primary">Excelencia</strong> en servicio y
              sostenibilidad.
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InfoWithImages;
