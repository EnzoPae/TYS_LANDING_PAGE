//next
import Link from "next/link";
//models
import { ServiciosRoutesModel } from "@/models";

const Hero = () => {
  return (
    <section className="min-h-100 flex align-items-center">
      <div className="hero g-p-left g-p-right">
        <h1 className="fs-4">Servicios.</h1>
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
