import "./servicios.css";
import { CardSlider } from "@/components";
import timbues from "@/assets-official/timbues.webp";

const Servicios = () => {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const cards = [
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Terminales y Servicios",
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Terminales y Servicios",
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Terminales y Servicios",
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Terminales y Servicios",
    },
    {
      src: timbues,
      alt: "img",
      desc: desc,
      footerTitle: "Terminales y Servicios",
    },
  ];
  return (
    <section className="servicios-section">
      <h2>SERVICIOS</h2>
      <CardSlider cards={cards} />
    </section>
  );
};

export default Servicios;
