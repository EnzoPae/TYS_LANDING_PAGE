//next
import Link from "next/link";
//models
import { ProyectosRoutesModel } from "@/models";

const Hero = () => {
  return (
    <section className="min-h-100 flex align-items-center">
      <div className="hero g-p-left g-p-right">
        <h1 className="fs-4">Proyectos.</h1>
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
