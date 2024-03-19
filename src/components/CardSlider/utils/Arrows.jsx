import "./utils.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons";

const SliderArrows = ({ handleClickArrowLeft, handleClickArrowRight }) => {
  return (
    <div className="arrows-container">
      <div className="arrows-buttons" onClick={handleClickArrowLeft}>
        <ChevronLeftIcon />
      </div>
      <div className="arrows-buttons" onClick={handleClickArrowRight}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default SliderArrows;
