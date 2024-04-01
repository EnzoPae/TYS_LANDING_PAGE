"use client";
import { useState } from "react";
import classes from "./gallery.basic.module.css";
//next js
import Image from "next/image";
//icons
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

const GalleryBasic = ({ images }) => {
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
    <div className="h-100 flex justify-content-center align-items-center">
      <div className={`${classes.galery_shadow} h-100 w-100 position-relative`}>
        <Image
          src={selectedImage}
          alt="imagen"
          width="auto"
          placeholder="blur"
          className="w-100 h-100 img-styles"
        />
        <div className={`${classes.arrow_left} bg-secondary pointer`}>
          <ArrowLeftIcon width={30} strokeWidth={1} onClick={previous} />
        </div>
        <div className={`${classes.arrow_right} bg-secondary pointer`}>
          <ArrowRightIcon width={30} strokeWidth={1} onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default GalleryBasic;
