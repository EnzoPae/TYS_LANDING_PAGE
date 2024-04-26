import Image from "next/image";
import FullScreenImage from "@/assets/0001.webp";

const Hero = () => {
  return (
    <section className="h-100-vh w-100 bg-alfa p-relatieve flex align-items-center">
      <Image
        src={FullScreenImage}
        alt="imagen de oficinas tys"
        className="img-styles w-100 h-100 p-absolute"
      />
    </section>
  );
};

export default Hero;
