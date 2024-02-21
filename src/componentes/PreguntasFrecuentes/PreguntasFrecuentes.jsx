import './PreguntasFrecuentes.css'

const PreguntasFrecuentes = () => {
  const preguntasFrecuentes = [
    {
      pregunta: '¿Cuáles son los horarios de servicio?',
      respuesta: 'Estamos disponibles las 6am a 12pm, los 7 días de la semana para brindarte el mejor servicio.'
    },
    {
        pregunta: '¿Cuáles son las tarifas y métodos de pago aceptados?',
        respuesta: 'Aceptamos todos los medios de pago: efectivo, tarjetas, y por supuesto mercadopago y cuenta DNI. Puede consultar las tarifas en la sección "Tarifas"'
      },
    {
      pregunta: '¿Cómo puedo contactarlos?',
      respuesta: 'Puedes contactarnos llamando a nuestro número de teléfono o utilizando nuestro formulario de contacto en línea.'
    },
    {
        pregunta: '¿Cuáles son las áreas de servicio?',
        respuesta: 'Realizamos viajes en toda Olavarría y publos aledaños. Puede consultar costos en la seccion "Tarifas"'
      },
      {
        pregunta: '¿Cómo puedo rastrear mi remis?',
        respuesta: 'Por el momento no contamos con rastreadores satelitales. Sin embargo, puede mantener un contacto fluido con la base a travez de whatsapp.'
      },
      {
        pregunta: '¿Cómo puedo cancelar una reserva?',
        respuesta: 'Puede cancelar el pedido por el mismo medio que lo socilicto.'
      },
      {
        pregunta: '¿Cómo puedo unirme a Remis NN como conductor?',
        respuesta: 'Para unirte como conductor, visita la sección "Unirse a NN" en nuestro sitio web y sigue los pasos indicados.'
      },

  ];

  return (
    <div className='preguntas-frecuentes card bg-secondary text-white p-3 p-lg-5 my-5'>
      <h2 className='mb-2 text-success bg-dark text-center py-2'>Preguntas Frecuentes</h2>
      {preguntasFrecuentes.map((preguntaRespuesta, index) => (
        <div key={index} className="faq-item">
          <h4 className='text-dark'>{preguntaRespuesta.pregunta}</h4>
          <p>{preguntaRespuesta.respuesta}</p>
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
