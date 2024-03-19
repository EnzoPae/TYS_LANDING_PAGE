"use client";
import "./main.screen.css";
import { useState } from "react";
//next js
import Image from "next/image";
//assets
import sn_noche from "@/assets-official/sn-noche.webp";
import sn_noche_2 from "@/assets-official/sn-noche-2.webp";
import quequen from "@/assets-official/quequen.webp";
import timbues from "@/assets-official/timbues.webp";
//icons
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons";

const images = [quequen, sn_noche, sn_noche_2, timbues];

const MainScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(false);
  };
  const next = () => {
    selectNewImage();
  };
  return (
    <section className="main-screen-section">
      <div className="main-screen-container">
        <Image
          alt="imagen de un paisaje con montañas y pinos"
          src={selectedImage}
          placeholder="blur"
          className="main-screen-image"
        />
      </div>
      <div className="main-screen-arrows">
        <div className="arrow-container" onClick={previous}>
          <ChevronLeftIcon w={35} />
        </div>
        <div className="arrow-container" onClick={next}>
          <ChevronRightIcon w={35} />
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
