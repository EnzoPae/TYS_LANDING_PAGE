import "./utils.css";
import Image from "next/image";

const SliderCards = ({ firstImgRef, src, alt, desc, footerTitle }) => {
  return (
    <article className="card-container">
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
