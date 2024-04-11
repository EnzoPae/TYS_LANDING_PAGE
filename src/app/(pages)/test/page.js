import classes from "./service.module.css";
//next js
import Image from "next/image";
//images
import quequen from "@/assets-official/quequen.webp";

export default function Test() {
  return (
    <main>
      <section id="main-section" className="h-100-vh flex align-items-center">
        <Image
          src={quequen}
          alt="algo"
          width="auto"
          className={`${classes.image} img-styles`}
        />
        <div className={`${classes.bento_grid}`}>
          <div className={classes.grid_item_1}>1</div>
          <div className={classes.grid_item_2}>2</div>
          <div className={classes.grid_item_3}>3</div>
          <div className={classes.grid_item_4}>4</div>
          <div className={classes.grid_item_5}>5</div>
          <div className={classes.grid_item_6}>6</div>
          <div className={classes.grid_item_7}>7</div>
          <div className={classes.grid_item_8}>8</div>
        </div>
      </section>
    </main>
  );
}
