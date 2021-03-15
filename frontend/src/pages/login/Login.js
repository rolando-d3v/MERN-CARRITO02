import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";
import "./login.scss";

export default function Login({ history }) {

  const { user, dispatch } = useContext(AuthContext);

  let lastpath = localStorage.getItem("lastpath") || "/";

  const loginUser = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Rolando",
      },
    });
    history.replace(lastpath);
  };

  return (
    <div className="bg_login">

      <div className="container_login">
        <div className="div_login">
          <img
            className="logo"
            src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
            role="img"
            alt="Microsoft"
          />

          <div className='body_login' >
            <h3 className='text_login'  >Crear cuenta</h3>
            <div className='div_input'>
              <input className='input_login' type="text" placeholder='alguien@example.com' />
            </div>
            <h3>Usar un número de teléfono en su lugar</h3>
            <h3>Obtener una nueva dirección de correo electrónico</h3>

            <button className="btn_login" onClick={loginUser}>Siguiente</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
