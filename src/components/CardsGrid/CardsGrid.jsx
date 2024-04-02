"use client";
import { useRouter } from "next/navigation";
import classes from "./cards.grid.module.css";
import Image from "next/image";

const CardsGrid = ({ items }) => {
  const router = useRouter();
  return (
    <div className={`${classes.grid_container} mt-2 mb-2`}>
      {items.map((item, i) => (
        <article
          key={i}
          className={`${classes.card} pointer overflow-hidden`}
          onClick={() => router.push(item.href)}
        >
          <Image
            src={item.src}
            alt="imagen"
            width="auto"
            className="img-styles w-100"
          />
          <div className={classes.text_box}>
            <header className="color-secondary fs-1-2 fw-bold">
              {item.title}
            </header>
            <p className="color-gray-dark">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CardsGrid;
