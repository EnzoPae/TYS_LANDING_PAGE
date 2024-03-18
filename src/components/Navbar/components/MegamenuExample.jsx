import "./megamenu.css"
import Image from "next/image";
import truksImage from "@/assets/gallery-image-1.webp";

const MegamenuExample = () => {
  return (
    <div className="megamenu-container">
      <ul className="megamenu-list">
        <li>
          <a href="#">Servicio primarios</a>
        </li>
        <li>
          <a href="#">Certificaciones legales</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
        <li>
          <a href="#">Servicio primarios</a>
        </li>
        <li>
          <a href="#">Certificaciones legales</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
      </ul>
      <div className="megamenu-info">
        <div className="megamenu-title">Servicios</div>
        <a href="#">Ver todos los servicios.</a>
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

export default MegamenuExample;
