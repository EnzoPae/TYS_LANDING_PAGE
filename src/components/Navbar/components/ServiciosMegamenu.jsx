import "./megamenu.css";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { MainRoutesModel, ServiciosRoutesModel } from "@/models";
//images
import truksImage from "@/assets/gallery-image-1.webp";

const ServiciosMegamenu = () => {
  return (
    <div className="megamenu-container">
      <ul className="megamenu-list">
        <li>
          <Link href={ServiciosRoutesModel.SERVICIO_1} replace={true}>
            Servicio 1
          </Link>
        </li>
        <li>
          <Link href={ServiciosRoutesModel.SERVICIO_2} replace={true}>
            Servicio 2
          </Link>
        </li>
        <li>
          <Link href={ServiciosRoutesModel.SERVICIO_3} replace={true}>
            Servicio 3
          </Link>
        </li>
        <li>
          <Link href={ServiciosRoutesModel.SERVICIO_4} replace={true}>
            Servicio 4
          </Link>
        </li>
      </ul>
      <div className="megamenu-info">
        <div className="megamenu-title">Servicios</div>
        <Link href={MainRoutesModel.SERVICIOS}>Ver todos los servicios.</Link>
        <div className="megamenu-image">
          <Image
            src={truksImage}
            alt="imagend de camion"
            placeholder="blur"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiciosMegamenu;
