"use client";
import "./navbar.css";
import { useState } from "react";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { RoutesModel } from "@/models";
//images
import logo from "@/assets/logo.webp";
//icons
import { TimesIcon, MenuIcon } from "@/icons";
//menus
import { ServiciosMegamenu } from "./components";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="nav-title">
          <Image src={logo} alt="logo" width={40} />
          <span>TERMINALES Y SERVICIOS</span>
        </Link>
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
            <Link href={RoutesModel.NOSOTROS} className="nav-link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link href={RoutesModel.SERVICIOS} className="nav-link">
              Servicios
            </Link>
            <div className="megamenu">
              <ServiciosMegamenu />
            </div>
          </li>
          <li className="nav-item">
            <Link href={RoutesModel.PROYECTOS} className="nav-link">
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="" className="nav-link">
              Sistemas
            </Link>
          </li>
          <li className="nav-item">
            <Link href={RoutesModel.TEST} className="nav-link">
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
