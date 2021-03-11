import React, { useContext } from "react";
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
    <nav className="nav_container" sticky="top">
      <div className="nav_seccion1">
        <Link className="navbar-brand  navbar-text font-weight-bold" to="/">
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{" "}
          PokeDesk
        </Link>

        <div className="nav_seccion1">
          <FaIcons.FaBars
            // onClick={() => setOpen(!open)}
            style={{ fontSize: "25px" }}
          />
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
        <button onClick={toggle}>click toggle</button>
      </div>
    </nav>
  );
}

const tyle = {
  color: "red",
  backgroundColor: "#3179a8",
};
