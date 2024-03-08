import React, { useState, useEffect, useMemo } from "react";
import "./Banner.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [direccion, setDireccion] = useState("");
  // const [mensaje, setMensaje] = useState("");

  const texts = useMemo(
    () => [
      "Olavarría",
      "Sierra chica",
      "Loma negra",
      "Hinojo",
    ],
    []
  );

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 2500);

  //   return () => clearInterval(intervalId);
  // }, [texts.length]);

  // const numeroWhatsApp = "2284656640";

  // const abrirWhatsApp = () => {
  //   const mensaje = encodeURIComponent("Hola, me podrás mandar un auto???");
  //   window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const numeroWhatsApp = "2284656640";

  const actualizarDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const abrirWhatsApp = () => {
    const mensajeCompleto = `Hola, me podrás mandar un auto a ${direccion}?`;
    const mensajeCodificado = encodeURIComponent(mensajeCompleto);
    // setMensaje(mensajeCompleto);
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`,
      "_blank"
    );
  };

  return (
    <div className="container-fluid banner">
      <div className="banner-container container">
        <h1>Absolutamente legal</h1>
        <div className="texto-dinamico">
          <h2>{texts[textIndex]}</h2>
        </div>

        <div className="mensaje">
          <input
            type="text"
            placeholder="Ingresa tu dirección"
            value={direccion}
            onChange={actualizarDireccion}
          />
          <button
            className="btn btn-success p-3 mt-4 fs-5 banner__btn"
            onClick={abrirWhatsApp}
          >
            {" "}
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="icon__whatsapp"
            />{" "}
            Pedir un coche
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
