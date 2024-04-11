import classes from "./arrows.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons";

const SliderArrows = ({ handleClickArrowLeft, handleClickArrowRight }) => {
  return (
    <div className="flex align-items-center mt-1">
      <div
        className={`${classes.arrows} bg-gamma pointer`}
        onClick={handleClickArrowLeft}
      >
        <ChevronLeftIcon />
      </div>
      <div
        className={`${classes.arrows} bg-gamma pointer`}
        onClick={handleClickArrowRight}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default SliderArrows;
