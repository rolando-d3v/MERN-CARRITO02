import { BrowserRouter } from "react-router-dom";
import Navegador from "./layout/navegador/Navegador";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRouter from "./routers/AppRouter";



export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Sidebar  />
        {/* <Navegador /> */}
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
