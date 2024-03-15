"use client";
import "./card.slider.css";
import { useRef } from "react";
import { SliderArrows, SliderCards } from "./utils";

const CardSlider = ({ cards }) => {
  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);

  const handleIconClick = (direction) => {
    const firstImgWidth = firstImgRef.current.clientWidth + 40;
    console.log(firstImgWidth);
    console.log(carouselRef.current.scrollLeft);
    carouselRef.current.scrollLeft +=
      direction === "left" ? -firstImgWidth : firstImgWidth;
  };

  return (
    <>
      <div ref={carouselRef} className="carousel">
        {cards.map((card, index) => (
          <SliderCards
            key={index}
            firstImgRef={index === 0 ? firstImgRef : null}
            src={card.src}
            alt={card.alt}
            desc={card.desc}
            footerTitle={card.footerTitle}
          />
        ))}
      </div>
      <SliderArrows
        handleClickArrowLeft={() => handleIconClick("left")}
        handleClickArrowRight={() => handleIconClick("right")}
      />
    </>
  );
};

export default CardSlider;
