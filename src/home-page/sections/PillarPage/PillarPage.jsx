import classes from "./pillar.page.module.css";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import { MainRoutesModel } from "@/models";

const GridItem = ({ label, href }) => {
  return (
    <Link href={href} className={`${classes.grid_item} fs-1-2`} target="_blank">
      {label} <ArrowRightIcon />
    </Link>
  );
};

const PillarPage = () => {
  const items = [
    { label: "¿Quienes Somos?", href: MainRoutesModel.NOSOTROS },
    { label: "Servicios", href: MainRoutesModel.SERVICIOS },
    { label: "Proyectos", href: MainRoutesModel.PROYECTOS },
    { label: "Historia", href: "#" },
    { label: "Recursos Humanos", href: "#" },
    { label: "Algo Más", href: "#" },
  ];
  return (
    <section className="g-p-left g-p-right">
      <h6 className="fs-2 fw-light mb-1">Accesos Rápidos</h6>
      <div className={`${classes.grid_box}`}>
        {items.map((item, i) => (
          <GridItem key={i} href={item.href} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default PillarPage;
