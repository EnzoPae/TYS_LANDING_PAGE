import "./hero.css";
import Image from "next/image";
import quequen from "@/assets-official/quequen.webp";

const Hero = () => {
  return (
    <section className="section-image">
      <div className="container-image">
        <Image
          alt="imagen de un paisaje con montañas y pinos"
          src={quequen}
          placeholder="blur"
          className="styles-image"
        />
      </div>
    </section>
  );
};

export default Hero;
