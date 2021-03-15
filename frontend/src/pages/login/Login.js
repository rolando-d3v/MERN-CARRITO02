import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";
import * as FaIcons from "react-icons/fa";
import "./login.scss";

export default function Login({ history }) {
  const { user, dispatch } = useContext(AuthContext);

  // extrae el path de localstorage para poder regresar al anterior path
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

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  // /// focus y cambia el estilo del label
  // const onFocusClick = () => {
  //   // le agrega a la clase input-div  la clase focus
  //   document.querySelector(".input-div").classList.add("focus");
  // };

  // //cuando deja de hacer focus lo chapa con onblur para ssaber k dejo de hacer focus
  // const onBlurClick = (e) => {
  //   // si no tiene value en el input hacer onblur y quita la clase focus de la clase input-div
  //   if (e === "") {
  //     document.querySelector(".input-div").classList.remove("focus");
  //   }
  // };

  return (
    <div className="">
      <img className="wave" src="assets/login/wave.png" />
      <div className="container">

        <div className="img">
          <img src="assets/login/bg.svg" />
        </div>

        <div className="login_content">
          <form className='form_login'   action="index.html">
            <img className='img_avatar' src="assets/login/avatar.svg" />
            <h2 className="title">Welcome</h2>

            <div className="input-div one">
              <div className="icon_login">
                  <FaIcons.FaUser className="" />
              </div>
              <div className="div">
                <h5 className='label_login'  >Username</h5>

                <input
                  type="text"
                  className="input"
                  // onBlur={(e) => onBlurClick(e.target.value)}
                  // onFocus={() => onFocusClick()}
                />
              </div>
            </div>

            <div className="input-div pass">
              <div className="icon_login">
                  <FaIcons.FaLock className="" />
              </div>
              <div className="div">
                <h5 className="label_login">Password</h5>
                <input type="password" className="input" />
              </div>
            </div>

            <a href="#">Forgot Password?</a>

            <input
              type="submit"
              className="btn"
              value="Login"
              onClick={loginUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
