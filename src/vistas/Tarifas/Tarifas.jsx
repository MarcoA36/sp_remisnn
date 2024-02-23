import React from "react";
import TablaTarifas from "../../componentes/TablaTarifas/TablaTarifas";
import "./Tarifas.css";
import TablaEspera from "../../componentes/TablaTarifas/TablaEspera";
import TablaLargaDistancia from "../../componentes/TablaTarifas/TablaLargaDistancia";
// import image from "../../imagenes/ubicacion-sm.png";

const Tarifas = () => {
  return (
    <div className="container my-4">
      <div className="tablas__container row">
        <div className="col-12 col-md-6 my-2">
          <TablaTarifas />
        </div>
        <div className="col-12 col-md-6 my-2">
          <TablaLargaDistancia />
        </div>
        <div className="col-12 col-md-6 my-2">
          <TablaEspera />
        </div>
        {/* <div className="col-12 col-md-6 my-2">
          <img src={image} alt="" />
        </div> */}
      </div>

      <div className="mensaje my-4">
        <h3 className="text-info">
          Estas tarifas fueron actualizadas por ultima vez el día 20/01/2024.
          Cualquier cambio se vera relflejado inmediatamente aqui.
        </h3>
      </div>
    </div>
  );
};

export default Tarifas;
