import "./footer.css";
import { CopyrightIcon } from "@/icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <div className="title">Lorem Ipsum</div>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <div className="title">Lorem Ipsum</div>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <div className="title">Lorem Ipsum</div>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <div className="title">Lorem Ipsum</div>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <CopyrightIcon w={20} />
        <span>2024 Terminales y Servicios</span>
      </div>
    </footer>
  );
};

export default Footer;
