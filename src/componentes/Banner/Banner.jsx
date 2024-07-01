import React, { useState } from "react";
import "./Banner.css";
// import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Banner = () => {
  // const [textIndex, setTextIndex] = useState(0);
  const [direccion, setDireccion] = useState("");
  // const [mensaje, setMensaje] = useState("");

  // const texts = useMemo(
  //   () => [
  //     "Respuesta inmediata",
  //     "Viajes larga distancia",
  //     "Encomiendas",
  //   ],
  //   []
  // );


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 2500);

  //   return () => clearInterval(intervalId);
  // }, [texts.length]);

  const numeroWhatsApp = "+5492284515431";

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
        {/* <h1>24hs<br/> Todos los días</h1> */}
        <h1>Remis Aquí 👇</h1>

        <div className="mensaje">
          <input
            type="text"
            placeholder="Ingresa la dirección"
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
            Pedir coche
          </button>
        </div>
        {/* <div className="texto-dinamico mt-4">
          <h2>{texts[textIndex]}</h2>
        </div> */}
        <div className="texto-dinamico mt-4">
          <h2>Respuesta inmediata</h2>
          <h3>Todos los medios de pago</h3>
          <h3>Viajes larga distancia</h3>
          <h3>Encomiendas</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
