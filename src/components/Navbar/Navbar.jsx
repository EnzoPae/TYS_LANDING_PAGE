"use client";
import "./navbar.css";
import { useState } from "react";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { MainRoutesModel } from "@/models";
//images
import logo from "@/assets/logo.webp";
//icons
import { TimesIcon, MenuIcon } from "@/icons";
//menus
import {
  ServiciosMegamenu,
  SistemasMegamenu,
  ProyectosMegamenu,
} from "./components";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header w-100 g-p-left g-p-right bg-primary">
      <nav className="nav flex justify-content-between">
        <Link href="/" className="nav-title flex align-items-center">
          <Image src={logo} alt="logo" width={50} />
          <span className="bg-primary fs-1-5 fw-semibold">
            TERMINALES Y SERVICIOS
          </span>
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
            <Link href={MainRoutesModel.NOSOTROS} className="nav-link">
              Nosotros
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link href="" className="nav-link">
              Servicios
            </Link>
            <div className="megamenu bg-primary">
              <ServiciosMegamenu />
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link href="" className="nav-link">
              Proyectos
            </Link>
            <div className="megamenu bg-primary">
              <ProyectosMegamenu />
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link href="" className="nav-link">
              Sistemas
            </Link>
            <div className="megamenu bg-primary">
              <SistemasMegamenu />
            </div>
          </li>
          <li className="nav-item">
            <Link href={MainRoutesModel.TEST} className="nav-link">
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
