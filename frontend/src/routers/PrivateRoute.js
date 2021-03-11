import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, component: RouteComponent, ...rest }) => {


  //path de la pagina que navegas para logear y regresar a la misma pagina
  localStorage.setItem('lastpath',rest.location.pathname )

  return (
    <Route
      {...rest}
      component={(props) => {
        return  isAuthenticated 
        ? <RouteComponent {...props} /> 
        : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;





// ------------------------------------------------

// ------------------------------------------------

// import { useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "../context/auth/AuthContext";

// const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!isAuthenticated)
//           return (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           );

//         if (!roles.includes(user.role))
//           return (
//             <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//           );
//         return <Component {...props} />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
