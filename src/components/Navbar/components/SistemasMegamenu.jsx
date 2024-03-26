import "./megamenu.css";
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
    <div className="megamenu-container">
      <ul className="megamenu-list">
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
      <div className="megamenu-info">
        <div className="megamenu-title">Sistemas Terminales y Servicios.</div>
        <div className="megamenu-image">
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
