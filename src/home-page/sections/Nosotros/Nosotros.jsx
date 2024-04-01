import { BoxImage } from "@/components";
import quequen from "@/assets-official/quequen.webp";

const Nosotros = () => {
  const title = "¿Quienes Somos?";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section className="min-h-100 flex align-items-center">
      <BoxImage
        src={quequen}
        alt="imagen de quequen"
        title={title}
        text={text}
      />
    </section>
  );
};

export default Nosotros;
