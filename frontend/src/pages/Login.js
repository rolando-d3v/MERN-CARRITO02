import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { types } from "../context/auth/types";

export default function Login({history}) {
  const { user, dispatch } = useContext(AuthContext);


  // extrae el path de localstorage para poder regresar al anterior path
  let lastpath = localStorage.getItem('lastpath')  || '/'

  const loginUser = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Rolando",
      },
    });
    history.replace(lastpath)
  };

  return (
    <div className="mt-8 px-4">
      <h3 className="text-5xl font-bold">Login</h3>
      <hr className="my-8" />
      <button
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded text-white"
        type="button"
        onClick={loginUser}
      >
        Login app
      </button>
    </div>
  );
}
