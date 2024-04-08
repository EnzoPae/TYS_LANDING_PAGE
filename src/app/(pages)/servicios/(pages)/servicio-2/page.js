import classes from "./service.module.css";
//next js
import Image from "next/image";
//images
import quequen from "@/assets-official/quequen.webp";
import timbues from "@/assets-official/timbues.webp";
import snNoche from "@/assets-official/sn-noche-2.webp";
//components
import { GalleryCardInfo, CustomLinkButton } from "@/components";

export default function Servicio2() {
  const images = [
    {
      src: snNoche,
      header: "Imagenes",
      title: "San Nicolas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      src: timbues,
      header: "Imagenes",
      title: "Otro Titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      src: quequen,
      header: "Imagenes",
      title: "New Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];
  return (
    <main>
      <section
        id="main-section"
        className="h-100-vh bg-primary flex justify-content-between align-items-center"
      >
        <Image
          src={quequen}
          alt="algo"
          width="auto"
          className={`${classes.image} img-styles`}
        />
        <div className={`${classes.box_info}`}>
          <h1 className="fs-3 mb-1">Servicio 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <CustomLinkButton href="#gallery-section" className="mt-2">
            Ver Imagenes
          </CustomLinkButton>
        </div>
      </section>
      <section id="gallery-section" className="h-100-vh">
        <GalleryCardInfo images={images} />
      </section>
    </main>
  );
}
