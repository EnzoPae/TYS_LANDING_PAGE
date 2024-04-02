import quequen from "@/assets-official/quequen.webp";
import { DoubleImageFullScreen } from "@/components";

const Hero = () => {
  return (
    <section>
      <DoubleImageFullScreen
        image={quequen}
        title="TERMINALES & SERVICIOS"
        subtitle="ENCUENTRA EL SERVICIO A TU MEDIDA."
      />
    </section>
  );
};

export default Hero;
