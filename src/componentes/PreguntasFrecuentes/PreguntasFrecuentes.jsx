import React from "react";
import Accordion from "react-bootstrap/Accordion";

const PreguntasFrecuentes = () => {
  const preguntasFrecuentes = [
    {
      pregunta: "¿Cuáles son los horarios de servicio?",
      respuesta:
        "Estamos disponibles de 7 a 23hs, los 7 días de la semana para brindarte el mejor servicio.",
    },
    {
      pregunta: "¿Cuáles son las tarifas y métodos de pago aceptados?",
      respuesta:
        'Aceptamos todos los medios de pago: efectivo, tarjetas, y por supuesto MercadoPago y cuenta DNI. Puede consultar las tarifas en la sección "Tarifas".',
    },
    {
      pregunta: "¿Cómo puedo contactarlos?",
      respuesta:
        "Puedes contactarnos llamando a nuestro número de teléfono o utilizando nuestro formulario de contacto en línea.",
    },
    {
      pregunta: "¿Cuáles son las áreas de servicio?",
      respuesta:
        'Realizamos viajes en toda Olavarría y pueblos aledaños. Puede consultar costos en la sección "Tarifas".',
    },
    {
      pregunta: "¿Cómo puedo rastrear mi remis?",
      respuesta:
        "Por el momento no contamos con rastreadores satelitales. Sin embargo, puede mantener un contacto fluido con la base a través de WhatsApp.",
    },
    {
      pregunta: "¿Cómo puedo cancelar una reserva?",
      respuesta: "Puede cancelar el pedido por el mismo medio que lo solicitó.",
    },
    {
      pregunta: "¿Cómo puedo unirme como conductor?",
      respuesta:
        'Para unirte como conductor, visita la sección "Unirse" y sigue los pasos indicados.',
    },
  ];

  return (
    <div className="my-4">

      <h2 className="text-center text-white">Preguntas frecuentes</h2>
      <Accordion defaultActiveKey="0" className="my-2 p-2">
        {preguntasFrecuentes.map((preguntaRespuesta, index) => (
          <Accordion.Item
            key={index}
            eventKey={index.toString()}
            className="bg-dark"
          >
            <Accordion.Header className="bg-primary text-white">
              {preguntaRespuesta.pregunta}
            </Accordion.Header>
            <Accordion.Body className="bg-light">
              {preguntaRespuesta.respuesta}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default PreguntasFrecuentes;
