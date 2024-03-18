import "./megamenu.css";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { RoutesModel } from "@/models";
//images
import truksImage from "@/assets/gallery-image-1.webp";

const ServiciosMegamenu = () => {
  return (
    <div className="megamenu-container">
      <ul className="megamenu-list">
        <li>
          <Link href="">Ejemplo de link</Link>
        </li>
        <li>
          <Link href="">Ejemplo de link</Link>
        </li>
        <li>
          <Link href="">Ejemplo de link</Link>
        </li>
        <li>
          <Link href="">Ejemplo de link</Link>
        </li>
        <li>
          <Link href="">Ejemplo de link</Link>
        </li>
      </ul>
      <div className="megamenu-info">
        <div className="megamenu-title">Servicios</div>
        <Link href={RoutesModel.SERVICIOS}>Ver todos los servicios.</Link>
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
