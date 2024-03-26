import "./hero.css";
//next
import Link from "next/link";
//models
import { ProyectosRoutesModel } from "@/models";

const Hero = () => {
  return (
    <section className="section-container min-h-100 bg-primary-dark">
      <div className="hero global-padding">
        <h1>Proyectos.</h1>
        <p>
          Terminales y Servicios cuenta con una amplia experiencia realizando
          una importante variedad de proyectos.
        </p>
        <ul>
          <li>
            <Link href={ProyectosRoutesModel.PROYECTO_1}>Proyecto 1</Link>
          </li>
          <li>
            <Link href={ProyectosRoutesModel.PROYECTO_2}>Proyecto 2</Link>
          </li>
          <li>
            <Link href={ProyectosRoutesModel.PROYECTO_3}>Proyecto 3</Link>
          </li>
          <li>
            <Link href={ProyectosRoutesModel.PROYECTO_4}>Proyecto 4</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
