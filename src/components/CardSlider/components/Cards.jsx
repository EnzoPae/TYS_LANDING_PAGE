"use client";
import Image from "next/image";
import classes from "./cards.module.css";
import { useRouter } from "next/navigation";

const SliderCards = ({ firstImgRef, src, desc, footerTitle, href }) => {
  const router = useRouter();

  return (
    <article
      className={`${classes.container} bg-gamma pointer`}
      onClick={() => router.push(href)}
    >
      <Image
        ref={firstImgRef}
        src={src}
        alt={footerTitle ? footerTitle : "imagen"}
        draggable={false}
        width="auto"
        className="img-styles"
      />
      <div className={`${classes.info} p-relative o-hidden`}>
        <p className="fs-1">{desc}</p>
        <footer className="fs-1-2 p-absolute">{footerTitle}</footer>
      </div>
    </article>
  );
};

export default SliderCards;
