import "./utils.css";
import Image from "next/image";
import arrowLeft from "@/assets/chevron-left.svg";
import arrowRight from "@/assets/chevron-right.svg";

const SliderArrows = ({ handleClickArrowLeft, handleClickArrowRight }) => {
  return (
    <div className="arrows-container">
      <div className="arrows-buttons" onClick={handleClickArrowLeft}>
        <Image src={arrowLeft} alt="arrow-left" width={25} />
      </div>
      <div className="arrows-buttons" onClick={handleClickArrowRight}>
        <Image src={arrowRight} alt="arrow-right" width={25} />
      </div>
    </div>
  );
};

export default SliderArrows;
