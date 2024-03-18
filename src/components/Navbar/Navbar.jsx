"use client";
import "./navbar.css";
import { useState } from "react";
//images
import Image from "next/image";
//icons
import logo from "@/assets/logo.webp";
import { TimesIcon, MenuIcon } from "@/icons";
//menus
import { MegamenuExample } from "./components";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <Image src={logo} alt="logo terminales y servicios" width={60} />
        <MenuIcon
          w={32}
          className="toggle-menu pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul className={`nav-list ${showMenu && "show-menu"}`}>
          <div className="close-menu">
            <TimesIcon
              w={32}
              className="pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">
              About Us
            </a>
            <div className="megamenu">
              <MegamenuExample />
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Explorer
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              System
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
