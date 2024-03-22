"use client";
import "./clientes.banner.css";
import Image from "next/image";
import abstract from "@/assets/logos/abstract.svg";
import aib from "@/assets/logos/aib.svg";
import crunchyroll from "@/assets/logos/crunchyroll.svg";
import edeka from "@/assets/logos/edeka.svg";
import gsmarenadotcom from "@/assets/logos/gsmarenadotcom.svg";
import liberapay from "@/assets/logos/liberapay.svg";
import ndr from "@/assets/logos/ndr.svg";
import strava from "@/assets/logos/strava.svg";

const ClientesBanner = () => {
  const images = [
    { src: abstract, alt: "quequen" },
    { src: aib, alt: "quequen" },
    { src: crunchyroll, alt: "quequen" },
    { src: edeka, alt: "quequen" },
    { src: gsmarenadotcom, alt: "quequen" },
    { src: liberapay, alt: "quequen" },
    { src: ndr, alt: "quequen" },
    { src: strava, alt: "quequen" },
  ];

  return (
    <section className="min-h-100 global-padding">
      <div className="hero-container">
        <div className="hero">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            La calidad es el distintivo de nuestro enfoque. Desde la concepción
            de nuestras ideas hasta la entrega final, cada paso de nuestro
            proceso se realiza con una atención meticulosa a los detalles.
            Nuestro equipo de profesionales altamente capacitados trabaja
            incansablemente para garantizar que cada producto/servicio no solo
            cumpla, sino que supere las expectativas más exigentes.
          </p>
        </div>
      </div>
      <div className="banner-container">
        <div className="banner">
          <div className="logos">
            {images.map((image, i) => (
              <Image src={image.src} alt={image.alt} width="auto" key={i} />
            ))}
            {images.map((image, i) => (
              <Image src={image.src} alt={image.alt} width="auto" key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesBanner;
