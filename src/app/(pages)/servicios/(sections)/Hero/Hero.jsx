import "./hero.css";
//next
import Link from "next/link";
//models
import { ServiciosRoutesModel } from "@/models";

const Hero = () => {
  return (
    <section className="section-container min-h-100 bg-primary-dark">
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
