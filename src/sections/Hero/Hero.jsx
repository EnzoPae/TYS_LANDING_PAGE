import Image from "next/image";
import backgroundImage from "@/assets/background.webp";
import logo from "@/assets/logo.webp";
import "./hero.css";

const Hero = () => {
  return (
    <section className="section-image">
      <div className="hero-container">
        <div className="hero-title">
          <Image src={logo} alt="logo" width={100} />
          <h1>Terminales y Servicios</h1>
        </div>
      </div>
      <div className="container-image">
        <Image
          alt="imagen de un paisaje con montañas y pinos"
          src={backgroundImage}
          placeholder="blur"
          className="styles-image"
        />
      </div>
    </section>
  );
};

export default Hero;
