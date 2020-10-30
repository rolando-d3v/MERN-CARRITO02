import React from "react";
import {Route, Switch} from 'react-router-dom'
import Home from "../../pages/Home";
import Pokemon from "../../pages/pokemon/Pokemon";
import CreatePokemon from "../../pages/CreatePokemon";
import TablaPoke from "../../pages/tablaPoke/TablaPoke";
import Buscar from "../../pages/busqueda/Buscar";
import "./main.css";

function Main(props) {
  return (
    <div className={`div_main ${props.toggleState ? "marginOFF" : "marginON"}`} >
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/preguntas' component={CreatePokemon} />
        <Route exact={true} path='/pokemon/:id' component={Pokemon} />
        <Route exact={true} path='/tabla' component={TablaPoke} />
        <Route exact={true} path='/buscar' component={Buscar} />
      </Switch>
    </div>
  );
}

export default Main;
