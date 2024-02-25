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
          <h2 className="text-dark fs-1">Bienvenidos a NN</h2>
          <h5>
            Somos un emprendimiento que nace con el fin de ofrecer una
            alternativa de calidad a la actual oferta de remises y taxis que hay
            en nuestra ciudad.
          </h5>
          <h5>
            Entendemos a la perfección las claves para brindar
            el mejor servicio posible. Nos esforzamos incansablemente día a día
            para superar las expectativas, poniendo énfasis en la calidad,
            confiabilidad y satisfacción de nuestros clientes.
          </h5>
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
