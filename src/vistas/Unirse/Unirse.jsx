import CardUnirse from "../../componentes/CardUnirse/CardUnirse";
import "./Unirse.css";
const Unirse = () => {
  return (
    <div className="unirse">
      <div className="container">
        <CardUnirse />

        <div className="contactarse text-white bg-secondary py-3">
          <h3 className="text-info">Si estas interesad@ en unirte contactate por alguno de estos medios</h3>
          <h4>2284656640</h4>
          <h4>remisnn@gmail.com</h4>
          <h5>O dejanos un mesaje en el formulario de contacto</h5>
        </div>
      </div>
    </div>
  );
};

export default Unirse;
