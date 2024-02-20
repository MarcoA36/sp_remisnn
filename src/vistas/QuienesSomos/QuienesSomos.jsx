import React from "react";
import CardQuienesSomos from "../../componentes/CardQuienesSomos/CardQuienesSomos";
import PreguntasFrecuentes from "../../componentes/PreguntasFrecuentes/PreguntasFrecuentes";

const QuienesSomos = () => {
  return (
    <div className="container quienes-somos__container">
      <CardQuienesSomos />
      <PreguntasFrecuentes/>
    </div>
  );
};

export default QuienesSomos;
