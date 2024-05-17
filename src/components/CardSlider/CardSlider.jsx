"use client";
import classes from "./card.slider.module.css";
import { useRef } from "react";
//next
import Link from "next/link";
//custom components
import { SliderArrows, SliderCards } from "./components";

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
      <div ref={carouselRef} className={classes.carousel}>
        {cards.map((card, index) => (
          <SliderCards
            key={index}
            firstImgRef={index === 0 ? firstImgRef : null}
            src={card.src}
            alt={card.footerTitle}
            desc={card.desc}
            footerTitle={card.footerTitle}
            href={card.href ? card.href : "#"}
          />
        ))}
      </div>
      <div className={`${classes.footer} gpr`}>
        <SliderArrows
          handleClickArrowLeft={() => handleIconClick("left")}
          handleClickArrowRight={() => handleIconClick("right")}
        />
        <Link href={href ? href : ""} className={classes.footer_link}>
          {linkText ? linkText : ""}
        </Link>
      </div>
    </>
  );
};

export default CardSlider;
