import React from "react";
import "./Novedades.css"; // Agrega un archivo de estilos (Novedades.css)
// import logoImage from "../../imagenes/card2.png";
import operador from "../../imagenes/operador.webp";
import Reno12 from "../../imagenes/vehiculo.png";
import legal from "../../imagenes/vehiculolegal.jpg";
import pagando from "../../imagenes/pagando2.png";
import mp from "../../imagenes/mercadopago.png";

const Novedades = () => {
  const novedades = [
    {
      id: 1,
      titulo: "Respuesta inmediata",
      contenido:
        "Comprendemos la importancia de una atención ágil y oportuna. Por eso nos esforzamos por ofrecer respuestas inmediatas a tus solicitudes de servicio.",
      imagen: operador,
    },
    {
      id: 4,
      titulo: "Transparencia de precios",
      contenido:
        "Para garantizar la transparencia, puede consultar nuestras tarifas y calcular el costo de su recorrido.",
      imagen: pagando,
    },
    {
      id: 5,
      titulo: "Facilidad de pago",
      contenido: "Aceptamos todos los medios de pago: efectivo, mercado pago, cuenta dni y trasferencia bancaría.",
      imagen: mp,
    },
    {
      id: 2,
      titulo: "Vehiculos en condiciones",
      contenido:
        "Nos ocupamos de que los vehiculos cumplan las condiciones para garantizar la seguridad del pasajero. Estamos atentos a los reclamos de los clientes para no despachar viajes a vehiculos fuera de estado.",
      imagen: Reno12,
    },
    {
      id: 3,
      titulo: "Choferes profesionales",
      contenido:
        "Procuramos tener a los mejores conductores. Nuestro equipo está conformado por personas comprometidas y profesionales.",
      imagen: legal,
    },

  ];

  return (
    <div className="novedades__container">
      <div className="container py-4">
        {novedades.map((novedad) => (
          <div
            className="card p-2 p-md-4 m-3 my-md-4 bg-dark text-white novedades__card"
            key={novedad.id}
          >
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={novedad.imagen} alt="" />
              </div>
              <div className="col-md-9 mt-2 mt-md-0 text-center textos">
                <h2 className="titulo">{novedad.titulo}</h2>
                <h5 className="contenido">{novedad.contenido}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novedades;
