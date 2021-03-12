import React, { useContext } from "react";
import { FaIndent, FaOutdent } from "react-icons/fa";
import { Navbar, Nav, Image } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { types } from "../../context/auth/types";
import AuthContext from "../../context/auth/authContext";
import "./navegador.scss";
import { ToggleConten } from "../../context/togleContext/TogleContext";

export default function Navegador() {
  const { user, dispatch } = useContext(AuthContext);
  const { toggle, toggleState } = useContext(ToggleConten);

  console.log(user);
  const history = useHistory();

  const navLink = [
    { name: "Home", url: "/preguntas" },
    { name: "Contact", url: "/" },
  ];

  const exitUser = () => {
    dispatch({
      type: types.LOGOUT,
    });
    history.replace("/login");
  };

  return (
    <nav
      style={{ display: !user.logged && "none" }}
      className="nav_container"
      // sticky="top"
    >
      <div className="nav_seccion1">
        <div className="nav_seccion1">
          <div className="tooglex">
            {toggleState ? (
              <FaOutdent className="sidebar__close " onClick={toggle} />
            ) : (
              <FaIndent className="sidebar__close " onClick={toggle} />
            )}
          </div>

          {navLink.map((link, index) => (
            <Link className="nav_link" key={index} to={link.url}>
              {link.name}
            </Link>
          ))}

          <div className="contenedor_input">
            <input className="input_search" type="text" placeholder="Buscar" />
            <FaIcons.FaSearch className="icon_search" />
          </div>
        </div>
        <button style={tyle} onClick={exitUser}>
          salir
        </button>
      </div>
    </nav>
  );
}

const tyle = {
  color: "red",
  backgroundColor: "#3179a8",
};
