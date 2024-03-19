import React from "react";
import CardQuienesSomos from "../../componentes/CardQuienesSomos/CardQuienesSomos";
import PreguntasFrecuentes from "../../componentes/PreguntasFrecuentes/PreguntasFrecuentes";
import "./QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="quienes-somos__container">
      <div className="card__container">
        <div className="container">
          <CardQuienesSomos />
        </div>
      </div>

      <div className="container preguntas__container">
        <PreguntasFrecuentes />
      </div>
    </div>
  );
};

export default QuienesSomos;
