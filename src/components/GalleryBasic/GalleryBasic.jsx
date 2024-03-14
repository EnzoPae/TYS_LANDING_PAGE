"use client";
import "./gallery.basic.css";
import { useState } from "react";
import Image from "next/image";
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
    <div className="gallery-basic-container">
      <div className="gallery-basic">
        <Image
          src={selectedImage}
          alt="imagen"
          width="auto"
          placeholder="blur"
          className="gallery-basic-image"
        />
        <div className="gallery-basic-arrows">
          <ArrowLeftIcon width={30} strokeWidth={1} onClick={previous} />
          <ArrowRightIcon width={30} strokeWidth={1} onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default GalleryBasic;
