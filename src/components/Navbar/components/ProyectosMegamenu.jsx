import "./megamenu.css";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { MainRoutesModel, ProyectosRoutesModel } from "@/models";
//images
import quequen from "@/assets-official/quequen.webp";

const ProyectosMegamenu = () => {
  return (
    <div className="megamenu-container">
      <ul className="megamenu-list">
        <li>
          <Link href={ProyectosRoutesModel.PROYECTO_1} replace={true}>
            Proyecto 1
          </Link>
        </li>
        <li>
          <Link href={ProyectosRoutesModel.PROYECTO_2} replace={true}>
            Proyecto 2
          </Link>
        </li>
        <li>
          <Link href={ProyectosRoutesModel.PROYECTO_3} replace={true}>
            Proyecto 3
          </Link>
        </li>
        <li>
          <Link href={ProyectosRoutesModel.PROYECTO_4} replace={true}>
            Proyecto 4
          </Link>
        </li>
      </ul>
      <div className="megamenu-info">
        <div className="megamenu-title">Proyectos</div>
        <Link href={MainRoutesModel.PROYECTOS}>Ver todos los proyectos.</Link>
        <div className="megamenu-image">
          <Image
            src={quequen}
            alt="imagend de quequen"
            placeholder="blur"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ProyectosMegamenu;
