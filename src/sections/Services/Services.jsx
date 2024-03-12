import "./services.css";
import { CardSlider } from "@/components";
import bgImage from "@/assets/background.webp";

const Services = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const cards = [
    { src: bgImage, alt: "img", desc: desc, footerTitle: "Terminales y Servicios" },
    { src: bgImage, alt: "img", desc: desc, footerTitle: "Terminales y Servicios" },
    { src: bgImage, alt: "img", desc: desc, footerTitle: "Terminales y Servicios" },
    { src: bgImage, alt: "img", desc: desc, footerTitle: "Terminales y Servicios" },
    { src: bgImage, alt: "img", desc: desc, footerTitle: "Terminales y Servicios" },
  ];
  return (
    <section className="services-section-container">
      <h2>SERVICIOS</h2>
      <CardSlider cards={cards} />
    </section>
  );
};

export default Services;
