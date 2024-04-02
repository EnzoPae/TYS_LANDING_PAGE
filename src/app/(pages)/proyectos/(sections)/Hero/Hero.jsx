import timbues from "@/assets-official/timbues.webp";
import { DoubleImageFullScreen } from "@/components";

const Hero = () => {
  return (
    <section>
      <DoubleImageFullScreen
        image={timbues}
        title="TERMINALES & SERVICIOS"
        subtitle="MIRA LA AMPLIA GAMA DE PROYECTOS REALIZADOS."
      />
    </section>
  );
};

export default Hero;
