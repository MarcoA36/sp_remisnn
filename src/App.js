import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navegacion from "./componentes/Navbar/Navbar";
import Home from "./vistas/Home/Home";
import Clientes from "./vistas/Clientes/Clientes";
import Tarifas from "./vistas/Tarifas/Tarifas";
import QuienesSomos from "./vistas/QuienesSomos/QuienesSomos";
import Unirse from "./vistas/Unirse/Unirse";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";
import ScrollToTop from "./utils/scrollTop";

function App() {
  return (
    <div className="app">
      <Navegacion />
      <ScrollToTop/>       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/tarifas" element={<Tarifas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/unirse" element={<Unirse />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
