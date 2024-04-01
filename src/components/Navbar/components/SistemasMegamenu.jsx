import classes from "./megamenu.module.css";
//next js
import Link from "next/link";
import Image from "next/image";
//images
import timbues from "@/assets-official/timbues.webp";

const SistemasMegamenu = () => {
  const URLs = {
    PROVEEDORES: "http://tys.yavuerp.com.ar:10000/jcnt/portal/frontend/",
    CLIENTES: "http://logistica.terminalesyservicios.com.ar",
  };
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li>
          <Link href={URLs.CLIENTES} target="_blank">
            Clientes
          </Link>
        </li>
        <li>
          <Link href={URLs.PROVEEDORES} target="_blank">
            Proveedores
          </Link>
        </li>
      </ul>
      <div className={classes.info}>
        <div className={classes.title}>Sistemas Terminales y Servicios.</div>
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

export default SistemasMegamenu;
