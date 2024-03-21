import "./hero.css";
//next
import Link from "next/link";
import Image from "next/image";
//models
import { ServiciosRoutesModel } from "@/models";
//images
import quequen from "@/assets-official/quequen.webp";

const Hero = () => {
  return (
    <section className="section-container">
      <div className="image-container">
        <Image
          src={quequen}
          alt="planta quequen"
          width="auto"
          placeholder="blur"
        />
      </div>
      <div className="hero global-padding">
        <h1>Servicios.</h1>
        <p>
          Terminales y Servicios ofrece una amplia gama de servicios de primera
          calidad que se adaptan a las necesidades del cliente.
        </p>
        <ul>
          <li>
            <Link href={ServiciosRoutesModel.SERVICIO_1}>Servicio 1</Link>
          </li>
          <li>
            <Link href={ServiciosRoutesModel.SERVICIO_2}>Servicio 2</Link>
          </li>
          <li>
            <Link href={ServiciosRoutesModel.SERVICIO_3}>Servicio 3</Link>
          </li>
          <li>
            <Link href={ServiciosRoutesModel.SERVICIO_4}>Servicio 4</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
