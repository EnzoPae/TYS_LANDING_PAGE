"use client";
import "./utils.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SliderCards = ({ firstImgRef, src, alt, desc, footerTitle, href }) => {
  const router = useRouter();

  return (
    <article className="card-container" onClick={() => router.push(href)}>
      <Image
        ref={firstImgRef}
        src={src}
        alt={alt ? alt : "imagen"}
        draggable={false}
        width="auto"
      />
      <div className="card-info">
        <p>{desc}</p>
        <footer>{footerTitle}</footer>
      </div>
    </article>
  );
};

export default SliderCards;
