"use client";
import Image from "next/image";
import classes from "./cards.module.css";
import { useRouter } from "next/navigation";

const SliderCards = ({ firstImgRef, src, alt, desc, footerTitle, href }) => {
  const router = useRouter();

  return (
    <article
      className={`${classes.container} bg-primary-light pointer`}
      onClick={() => router.push(href)}
    >
      <Image
        ref={firstImgRef}
        src={src}
        alt={alt ? alt : "imagen"}
        draggable={false}
        width="auto"
        className="img-styles"
      />
      <div className={`${classes.info} position-relative overflow-hidden`}>
        <p className="fs-1">{desc}</p>
        <footer className="fs-1-2 position-absolute">{footerTitle}</footer>
      </div>
    </article>
  );
};

export default SliderCards;
