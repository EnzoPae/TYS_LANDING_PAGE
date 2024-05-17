"use client";
import { useState } from "react";
import classes from "./navbar.module.css";
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
    <header className={`${classes.header} w-100 gpl gpr bg-beta`}>
      <nav className={`${classes.nav} flex justify-content-between`}>
        <Link href="/" className="flex align-items-center">
          <Image src={logo} alt="logo" width={50} />
          <span className={`${classes.nav_title} bg-beta fs-2 fw-semibold`}>
            Terminales y Servicios
          </span>
        </Link>
        <MenuIcon
          w={32}
          className={`${classes.toggle_menu} pointer`}
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul className={`${classes.nav_list} ${showMenu && classes.show_menu}`}>
          <div className={classes.close_menu}>
            <TimesIcon
              w={32}
              className="pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <li className={classes.nav_item}>
            <Link href={MainRoutesModel.NOSOTROS} className={classes.nav_link}>
              Nosotros
            </Link>
          </li>
          <li className={`${classes.nav_item} ${classes.dropdown}`}>
            <Link href="" className={classes.nav_link}>
              Servicios
            </Link>
            <div className={`${classes.megamenu} bg-primary`}>
              <ServiciosMegamenu />
            </div>
          </li>
          <li className={`${classes.nav_item} ${classes.dropdown}`}>
            <Link href="" className={classes.nav_link}>
              Proyectos
            </Link>
            <div className={`${classes.megamenu} bg-primary`}>
              <ProyectosMegamenu />
            </div>
          </li>
          <li className={`${classes.nav_item} ${classes.dropdown}`}>
            <Link href="" className={classes.nav_link}>
              Sistemas
            </Link>
            <div className={`${classes.megamenu} bg-primary`}>
              <SistemasMegamenu />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
