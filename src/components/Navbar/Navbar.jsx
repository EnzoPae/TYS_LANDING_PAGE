"use client";
import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import truksImage from "@/assets/gallery-image-1.webp";
import { useState } from "react";
import { TimesIcon, MenuIcon } from "@/icons";

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
              <div className="megamenu-container">
                <ul className="megamenu-list">
                  <li>
                    <a href="#">Servicio primarios</a>
                  </li>
                  <li>
                    <a href="#">Certificaciones legales</a>
                  </li>
                  <li>
                    <a href="#">Ayuda</a>
                  </li>
                  <li>
                    <a href="#">Servicio primarios</a>
                  </li>
                  <li>
                    <a href="#">Certificaciones legales</a>
                  </li>
                  <li>
                    <a href="#">Ayuda</a>
                  </li>
                </ul>
                <div className="megamenu-info">
                  <div className="megamenu-title">Servicios</div>
                  <a href="#">Ver todos los servicios.</a>
                  <div className="megamenu-image">
                    <Image
                      src={truksImage}
                      alt="imagend de camion"
                      placeholder="blur"
                      width={500}
                    />
                  </div>
                </div>
              </div>
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
