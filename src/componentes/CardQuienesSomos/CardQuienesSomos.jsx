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
        <div className="card__texto text-center">
          <h2 className="text-dark fs-1">Quiénes Somos</h2>
          <h5>
            NN es un emprendimiento que nace con el fin de
            brindar una alternativa de calidad a la actual oferta de remises y
            taxis que hay en nuestra ciudad.
          </h5>
          <h5>
            Creemos entender las claves para poder brindar el mejor servicio a
            nuestra alcance, y nos esforzamos día a día para superarnos.
          </h5>
          {/* <h5>
            Para eso estamos comprometidos a escuchar y responder sugerencias de nuestros clientes.
          </h5>
          <h4>etc etc</h4> */}
          {/* <p>
            Ademas, estamos comprometidos a escuchar y responder a sugerencias y
            reclamos, porque creemos que la mejora continua es fundamental..
          </p>
          <p>
            El tiempo de cada cliente es sagrado, por lo que tenemos como foco
            principal brindar una respuesta rápida. etc etc
          </p> */}
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
