// import styled from "styled-components";
import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToggleConten } from "../context/togleContext/TogleContext";
import Navegador from "../layout/navegador/Navegador";
import Buscar from "../pages/busqueda/Buscar";
import CreatePokemon from "../pages/CreatePokemon";
import Home from "../pages/home/Home";
import Pokemon from "../pages/pokemon/Pokemon";
import TablaPoke from "../pages/tablaPoke/TablaPoke";
import "./homeRouter.scss";

export default function HomeRouter() {
  const { toggleState } = useContext(ToggleConten);

  return (
    <div className={`div_mainx ${toggleState ? "marginOFFx" : "marginONx"}`}>
      <Navegador />
     <div className='div_routes'  >
     <Switch>
        <Route exact path="/preguntas" component={CreatePokemon} />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/pokemon/:id" component={Pokemon} />
        <Route exact={true} path="/tabla" component={TablaPoke} />
        <Route exact={true} path="/buscar" component={Buscar} />
        <Redirect to="/" />
      </Switch>
     </div>
    </div>
  );
}
