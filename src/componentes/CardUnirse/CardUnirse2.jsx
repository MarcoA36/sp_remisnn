import logoImage from "../../imagenes/manejate.jpg";
import "./CardUnirse.css";
const CardUnirse2 = () => {
  return (
    <div className="row card__unirse card__unirse--2 py-2 px-1 p-md-2 p-lg-4 align-items-center bg-dark rounded-2">
      {/* <h2 className="text-center fs-1 mb-lg-4">Manejate</h2> */}
      <div className="col-lg-5 d-none d-lg-block">
        <div className="card__imagen">
          <img src={logoImage} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-7 py-2 p-lg-4">
        <div className="card__texto text-center px-1 py-2 py-lg-4">
          <h4>
            ⏳ Define tus propios horarios de trabajo. ¡Tu tiempo es tuyo!
          </h4>
          <h4 className="mb-3 mb-lg-5">
            🕥 Trabaja en el rango horario que mejor se adapte a tus necesidades
            y estilo de vida.
          </h4>
          <h4>
            Elige dónde pasar tu tiempo mientras esperas ser asignado a un
            viaje. Los destinos te llegarán directamente a tu celular.
          </h4>
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

export default CardUnirse2;
