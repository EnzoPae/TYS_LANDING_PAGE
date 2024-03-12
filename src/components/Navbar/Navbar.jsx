import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image src={logo} alt="" width={60} />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="navbar-item-contact">Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
