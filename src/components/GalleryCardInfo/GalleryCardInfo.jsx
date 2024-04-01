"use client";
import { useState } from "react";
import { GalleryCard } from "./components";
import Image from "next/image";

const GalleryCardInfo = ({ images }) => {
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
    <div className="h-100 position-relative">
      <Image
        src={selectedImage.src}
        alt="imagen"
        width="auto"
        placeholder="blur"
        className="img-styles h-100 w-100"
      />
      <GalleryCard
        next={next}
        previous={previous}
        header={selectedImage.header}
        title={selectedImage.title}
        description={selectedImage.description}
      />
    </div>
  );
};

export default GalleryCardInfo;
