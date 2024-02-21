import React from "react";
import CardQuienesSomos from "../../componentes/CardQuienesSomos/CardQuienesSomos";
import PreguntasFrecuentes from "../../componentes/PreguntasFrecuentes/PreguntasFrecuentes";
import './QuienesSomos.css'

const QuienesSomos = () => {
  return (
    <div className="container quienes-somos__container">

      <div className="card__container">
        <CardQuienesSomos />
      </div>

      <div className="preguntas__container">
        <PreguntasFrecuentes />
      </div>
    </div>
  );
};

export default QuienesSomos;
