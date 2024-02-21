import logoImage from "../../imagenes/manejando-sm.jpg";
import "./CardQuienesSomos.css";
const CardQuienesSomos = () => {
  return (
    <div className="row card__quienes-somos align-items-center">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="card__imagen">
          <img src={logoImage} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card__texto">
          <h2>Quiénes Somos</h2>
          <p>
            NN es un emprendimiento que surge en respuesta a la escasa oferta de
            remises en nuestra ciudad. Nos dedicamos apasionadamente a
            proporcionar un servicio de calidad a nuestros pasajeros. Somos una
            comunidad de conductores comprometidos con valores fundamentales:
            respeto, transparencia y seguridad.
          </p>
          <p>
            Para eso nuestras tarifas estan siempre a disposicion del cliente.
            De manera que pueda saber de antemano cuanto le va a costar el
            recorrido.
          </p>
          <p>
             Ademas, estamos comprometidos a
            escuchar y responder a sugerencias y reclamos, porque creemos que la
            mejora continua es fundamental..
          </p>
          <p>
             El tiempo de cada cliente es sagrado, por lo que tenemos como foco principal brindar una respuesta rápida. etc etc
          </p>
        </div>
      </div>
      <div className="col-lg-6 d-lg-none">
        <div className="card__imagen">
          <img src={logoImage} alt="" className="img-fluid" />
        </div>
      </div>
      
    </div>
  );
};

export default CardQuienesSomos;
