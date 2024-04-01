import classes from "./megamenu.module.css";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { MainRoutesModel, ServiciosRoutesModel } from "@/models";
//images
import timbues from "@/assets-official/timbues.webp";

const ServiciosMegamenu = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
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
      <div className={classes.info}>
        <div className={classes.title}>Servicios</div>
        <Link href={MainRoutesModel.SERVICIOS}>Ver todos los servicios.</Link>
        <div className={classes.image}>
          <Image
            src={timbues}
            alt="imagend de timbues"
            placeholder="blur"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiciosMegamenu;
