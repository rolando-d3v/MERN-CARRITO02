import { BrowserRouter } from "react-router-dom";
import Navegador from "./layout/navegador/Navegador";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRouter from "./routers/AppRouter";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Navegador />
        <Sidebar  />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
