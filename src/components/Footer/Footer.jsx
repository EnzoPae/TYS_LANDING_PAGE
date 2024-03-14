import "./footer.css";
import Image from "next/image";
import CopyrightIcon from "@/assets/copyright.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h6>Lorem Ipsum</h6>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h6>Lorem Ipsum</h6>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h6>Lorem Ipsum</h6>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h6>Lorem Ipsum</h6>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <Image src={CopyrightIcon} alt="derechos reservados" width={20} />
        <span>2024 Terminales y Servicios</span>
      </div>
    </footer>
  );
};

export default Footer;
