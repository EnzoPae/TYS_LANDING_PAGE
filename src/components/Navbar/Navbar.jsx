import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <Image src={logo} alt="logo terminales y servicios" width={60} />
      <ul className="navbar-menu">
        <li className="item">Home</li>
        <li className="item">Explore</li>
        <li className="item">About</li>
        <li className="item">Systems</li>
      </ul>
    </div>
  );
};

export default Navbar;
