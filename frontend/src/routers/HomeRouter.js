// import styled from "styled-components";
import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToggleConten } from "../context/togleContext/TogleContext";
import Buscar from "../pages/busqueda/Buscar";
import CreatePokemon from "../pages/CreatePokemon";
import Home from "../pages/Home";
import Pokemon from "../pages/pokemon/Pokemon";
import TablaPoke from "../pages/tablaPoke/TablaPoke";
import "./homeRouter.scss";

export default function HomeRouter() {
  const { toggleState } = useContext(ToggleConten);

  return (
    <div className={`div_mainx ${toggleState ? "marginOFFx" : "marginONx"}`}>
      <Switch>
        <Route exact path="/preguntas" component={CreatePokemon} />
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/pokemon/:id" component={Pokemon} />
        <Route exact={true} path="/tabla" component={TablaPoke} />
        <Route exact={true} path="/buscar" component={Buscar} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

// //styled de Home
// const Dashboard = styled.section`
//   height: 100vh;
//   display: flex;
//   /* width: 100%; */
// `;

// const DashboardContent = styled.div`
//   background-color: #e6e1e1;
//   /* position: fixed; */
//   height: 100vh;
//   width: 100%;
//   /* margin-left: ${({ open }) => (open ? "18rem" : '0px')}; */
//   transition: all 0.3s ease;
// `;

// const Content = styled.section`
//   background-color: #e6e1e1;
//   width: auto;
//   /* margin-left: ${({ open }) => (open ? "18rem" : null)}; */
//   transition: all 0.3s ease;
//   /* height: 100vh; */
// `;
