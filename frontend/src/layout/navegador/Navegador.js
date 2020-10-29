import React, { useState, useContext } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaUserTie, FaIdCard } from "react-icons/fa";

import Sidebar from "./Sidebar";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./navegador.css";


const Navegador = ({toggle, toggleState}) => {



  return (
    <div>
      <Navbar  bg='dark' className="nav-bar navbar-dark justify-content-end"  >
        <Link className="navbar-brand  navbar-text font-weight-bold"
          to="/"
        >
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{" "}
        Spotify
        </Link >

        <Nav className="mr-auto "  >
          <ul className="navbar-nav mr-auto  ">
            <li className="nav-item ">
              <Link to={"/login"} className="nav-link">
                <FaUserTie className="mx-1" />
                  Login
                </Link>
            </li>
            <li className="nav-item">
              <Link to={"/preguntas"} className="nav-link">
                <FaIdCard className="mx-1" />
                  Preguntas
                </Link>
            </li>
          </ul>
        </Nav>
      </Navbar>
      <Sidebar toggle={toggle} isOpen={toggleState} />
    </div>
  );
};

export default Navegador;
