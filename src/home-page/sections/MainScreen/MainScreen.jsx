import "./main.screen.css";
import Image from "next/image";
import quequen from "@/assets-official/quequen.webp";

const MainScreen = () => {
  return (
    <section className="main-screen-section">
      <div className="main-screen-container">
        <Image
          alt="imagen de un paisaje con montañas y pinos"
          src={quequen}
          placeholder="blur"
          className="main-screen-image"
        />
      </div>
    </section>
  );
};

export default MainScreen;
