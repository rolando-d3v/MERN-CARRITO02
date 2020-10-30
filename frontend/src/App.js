import React, { useState} from "react";
import "./App.scss";
import {BrowserRouter} from 'react-router-dom'
import Navegador from './layout/navegador'
import Mainx from './layout/main/Main'
import Sidebar from "./layout/navegador/Sidebar";


function App() {

  // console.log(process.env.REACT_APP_BACKEND_URL);
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <div>
      <BrowserRouter>
      <Navegador  toggle={toggle}  toggleState={toggleState} />
      <Sidebar toggle={toggle} toggleState={toggleState} />
      <Mainx toggleState={toggleState} />
      </BrowserRouter>
    </div>
  );
}

export default App;
