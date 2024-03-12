import "./equipment.css";
import BgImage from "@/assets/background.webp";
import { BoxImage } from "@/components";

const Equipment = () => {
  const text =
    "Nuestros equipos fijos, dotados de la última tecnología en logística portuaria, son la columna vertebral de nuestras operaciones. Enfocados en la excelencia operativa, nuestros equipos fijos juegan un papel crucial en la fluidez de las operaciones portuarias.";
  return (
    <section className="equipment-section-container">
      <BoxImage
        src={BgImage}
        alt={"imagen de equipos fijos"}
        title={"EQUIPOS FIJOS"}
        text={text}
      />
    </section>
  );
};

export default Equipment;
