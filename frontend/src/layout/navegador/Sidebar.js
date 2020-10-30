import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav } from "react-bootstrap";
import {
  FaAlignJustify,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
  FaAlignLeft
} from "react-icons/fa";
import "./sidebar.scss";

const navList = [
  { icon: <FaPenSquare />, link: "/preguntas", menu: "Formulario" },
  { icon: <FaSearch />, link: "/buscar", menu: "Busqueda" },
  { icon: <FaTable />, link: "/tabla", menu: "Tabla" },
  {
    icon: <FaSignOutAlt />,
    link: "/login",
    menu: <span> Salir </span>,
  },
];

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.toggleState ? "sidebar-visible" : ""}`}>
     { props.toggleState ?  <FaAlignLeft className="sidebar__close h2" onClick={props.toggle} />
      : <FaAlignJustify className="sidebar__close h2" onClick={props.toggle} />}
      {props.toggleState ? (
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
            <Link className="grey" to="/preguntas">
            <FaPenSquare />
            </Link>
            <Link className="grey" to="/buscar">
            <FaSearch />
            </Link>
            <Link className="grey" to="/tabla">
              <FaTable />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
