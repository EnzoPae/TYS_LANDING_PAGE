"use client";
import "./card.slider.css";
import { useRef } from "react";
//next
import Link from "next/link";
//custom components
import { SliderArrows, SliderCards } from "./utils";

const CardSlider = ({ cards, linkText, href }) => {
  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);

  const handleIconClick = (direction) => {
    const firstImgWidth = firstImgRef.current.clientWidth + 40;
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
            href={card.href ? card.href : "#"}
          />
        ))}
      </div>
      <div className="carousel-footer">
        <SliderArrows
          handleClickArrowLeft={() => handleIconClick("left")}
          handleClickArrowRight={() => handleIconClick("right")}
        />
        <Link href={href ? href : ""}>{linkText ? linkText : ""}</Link>
      </div>
    </>
  );
};

export default CardSlider;
