import React, { useContext } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaUserTie, FaIdCard } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { types } from "../../context/auth/types";
import AuthContext from "../../context/auth/authContext";


const Navegador = () => {

  const {user, dispatch} = useContext(AuthContext)


  
  const history = useHistory()

  const exitUser = () => {
    dispatch({
      type: types.LOGOUT
    })
    history.replace('/login')
  }

  return (
      <Navbar  bg='dark' className="nav-bar navbar-dark justify-content-end" sticky="top" >
        <Link className="navbar-brand  navbar-text font-weight-bold"
          to="/"
        >
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{" "}
        PokeDesk
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
          <button  onClick={exitUser}  >salir</button>
        </Nav>
      </Navbar>
    
  );
};

export default Navegador;
