import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavItem, Nav } from "react-bootstrap";
import "./sidebar.scss";
import {
  FaIndent,
  FaOutdent,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";
import "./sidebar.scss";
import { useContext } from "react";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import Dropdown from "../dropdown/Dropdown";

const navList = [
  { icon: <FaPenSquare />, link: "/preguntas", menu: "Formulario" },
  { icon: <FaSearch />, link: "/buscar", menu: "Busqueda" },
  { icon: <FaTable />, link: "/tabla", menu: "Tabla" },
  { icon: <FaSignOutAlt />, link: "/login", menu: "salir" },
];

const linkSidebar = [
  { name: "Home", icon: <FaIcons.FaHome /> },
  { name: "Tools", icon: <FaIcons.FaTools /> },
  { name: "Formulario", icon: <FaIcons.FaFolder /> },
  { name: "Calendario", icon: <FaIcons.FaCalendarAlt /> },
];

export default function Sidebar() {
  const { toggle, toggleState } = useContext(ToggleConten);

  return (
    <div className={`sidebar ${toggleState ? "sidebar-visible" : ""}`}>
      <div className="tooglex">
        {toggleState ? (
          <FaOutdent className="sidebar__close h2" onClick={toggle} />
        ) : (
          <FaIndent className="sidebar__close h2" onClick={toggle} />
        )}
      </div>

      <div className="header_logo">
        <div>
          <FaIcons.FaApple style={{ fontSize: "1.5rem" }} />
          <h3>Dashboar</h3>
        </div>
      </div>

      <div className="header_avatar">
        <div>
          <img src="/assets/avatar.jpg" alt="alt" />
          <span>Susan Torres</span>
        </div>
      </div>

      <div className="div_buttonx">
        <button className="buttonx">Dashboar</button>
        <button className="buttonx">theme</button>
      </div>

      <div className="div_links">
        {linkSidebar.map((li, index) => (
          <Link className="sidebar_link" key={index} to="/">
            {li.icon} {li.name}
          </Link>
        ))}
      </div>

      <Dropdown/>

      {toggleState ? (
        <div className="sidebar__menu  ">
          <Nav className="list-unstyled pb-3">
            {navList.map((nav, i) => (
              <NavItem key={i}>
                <Link className="nav-link" to={nav.link}>
                  <span className="mr-3">{nav.icon}</span> {nav.menu}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      ) : (
        <div className="sidebarol">
          <div className="list-rol">
            {navList.map((nav, i) => (
              <NavItem key={i}>
                <Link className="nav-link" to={nav.link}>
                  <span className="mr-3">{nav.icon}</span>
                </Link>
              </NavItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
