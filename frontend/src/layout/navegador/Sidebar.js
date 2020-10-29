import React from "react";
import { NavItem, Nav } from "react-bootstrap";
import {
  FaAlignJustify,
  FaBriefcase,
  FaMoneyBill,
  FaAddressBook,
  FaSignOutAlt,
  FaAlignLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navList = [
  { icon: <FaBriefcase />, link: "/preguntas", menu: "Examen" },
  { icon: <FaMoneyBill />, link: "/home", menu: "Tutorial" },
  { icon: <FaAddressBook />, link: "/", menu: "Promedio" },
  {
    icon: <FaSignOutAlt />,
    link: "/login",
    menu: <span> Salir </span>,
  },
];

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.isOpen ? "sidebar-visible" : ""}`}>
     { props.isOpen ?  <FaAlignLeft className="sidebar__close h2" onClick={props.toggle} />
      : <FaAlignJustify className="sidebar__close h2" onClick={props.toggle} />}
      {props.isOpen ? (
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
            <FaBriefcase />
            </Link>
            <Link className="grey" to="/home">
            <FaMoneyBill />
            </Link>
            <Link className="grey" to="/">
              <FaAddressBook />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
