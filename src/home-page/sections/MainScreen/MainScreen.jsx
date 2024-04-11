"use client";
import classes from "./main.screen.module.css";
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
    <section className="h-100-vh flex justify-content-center align-items-center p-relative">
      <Image
        alt="img"
        src={selectedImage}
        placeholder="blur"
        className="img-styles w-100 h-100"
      />
      <div
        className={`${classes.arrows_wrapper} w-100 flex justify-content-between p-absolute`}
      >
        <div
          className={`${classes.arrow} bg-primary pointer`}
          onClick={previous}
        >
          <ChevronLeftIcon w={35} />
        </div>
        <div className={`${classes.arrow} bg-primary pointer`} onClick={next}>
          <ChevronRightIcon w={35} />
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
