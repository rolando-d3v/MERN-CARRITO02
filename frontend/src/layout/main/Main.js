import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../../pages/Home";
import Preguntas from "../../pages/Preguntas";
import "./main.css";

function Main(props) {
  return (
    <div className={`div_main ${props.toggleState ? "marginOFF" : "marginON"}`} >
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/preguntas' component={Preguntas} />
      </Switch>
    </div>
  );
}

export default Main;
