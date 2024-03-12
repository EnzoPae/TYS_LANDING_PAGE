import "./box.image.css";
import Image from "next/image";

const BoxImage = ({ src, alt, title, text }) => {
  return (
    <div className="container">
      <div className="text-box">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="image-container">
        <Image
          src={src}
          placeholder="blur"
          alt={alt ? alt : "imagen"}
          width="auto"
        />
      </div>
    </div>
  );
};

export default BoxImage;
