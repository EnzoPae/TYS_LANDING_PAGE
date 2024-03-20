import Link from "next/link";
import { ServiciosRoutesModel } from "@/models";

const Title = () => {
  return (
    <div className="min-h-100 padding-section">
      <div>
        <h1>Servicios</h1>
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
    </div>
  );
};

export default Title;
