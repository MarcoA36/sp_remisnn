import { Link } from "react-router-dom";
// import CardUnirse from "../../componentes/CardUnirse/CardUnirse";
import CardUnirse2 from "../../componentes/CardUnirse/CardUnirse2";
import "./Unirse.css";
import CardUnirse3 from "../../componentes/CardUnirse/CardUnirse3";

const Unirse = () => {
  return (
    <div className="container__unirse">
      <div className="card__container">
        <div className="card__banner">
          <CardUnirse2 />
        </div>

        <CardUnirse3 />
      </div>

      <div className="container m-auto my-4 contactarse text-white bg-secondary py-3">
        <h3 className="text-info">
          Si estas interesad@ en unirte contactate por alguno de estos medios
        </h3>
        <h4>2284656640</h4>
        <h4>info@remisnn.com</h4>
        <h5 className="text-dark">
          O dejanos un mesaje en el formulario de{" "}
          <Link
            to={"/contacto"}
            className="text-dark text-decoration-underline"
          >
            contacto
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Unirse;
