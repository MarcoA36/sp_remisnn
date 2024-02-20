import React from "react";
import TablaTarifas from "../../componentes/TablaTarifas/TablaTarifas";
import "./Tarifas.css";
import TablaEspera from "../../componentes/TablaTarifas/TablaEspera";

const Tarifas = () => {
  return (
    <div className="container my-4">
      
        <TablaTarifas />
        <TablaEspera/>
        <div className="mensaje my-4">
        <h3 className="text-info">Estas tarifas fueron actualizadas por ultima vez el día 20/01/2024. Cualquier cambio se vera relflejado inmediatamente aqui.</h3>
        </div>
    </div>
  );
};

export default Tarifas;
