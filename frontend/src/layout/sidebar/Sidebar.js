import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav } from "react-bootstrap";
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

const navList = [
  { icon: <FaPenSquare />, link: "/preguntas", menu: "Formulario" },
  { icon: <FaSearch />, link: "/buscar", menu: "Busqueda" },
  { icon: <FaTable />, link: "/tabla", menu: "Tabla" },
  {icon: <FaSignOutAlt />,link: "/login",menu: 'salir',
  },
];

const SidebarComponent = () => {


  const {toggle, toggleState} = useContext(ToggleConten)

  return (
    <div className={`sidebar ${toggleState ? "sidebar-visible" : ""}`}>

     <div className='tooglex' >
     { toggleState ?  <FaOutdent className="sidebar__close h2" onClick={toggle} />
      : <FaIndent className="sidebar__close h2" onClick={toggle} />}
     </div>

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
            <Link className="nav-link" to="/preguntas">
            <FaPenSquare />
            </Link>
            <Link className="nav-link" to="/buscar">
            <FaSearch />
            </Link>
            <Link className="nav-link" to="/tabla">
              <FaTable />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
