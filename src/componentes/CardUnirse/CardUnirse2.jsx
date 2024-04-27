import "./CardUnirse.css";
const CardUnirse2 = () => {
  return (
    <div className="card__unirse card__unirse--1  align-items-center rounded-3">
      <div className="container">
        <h2 className="text-center text-white fs-1 mb-lg-4">
          Trabaja con nosotros!
        </h2>

        <div className="card__texto m-auto  text-white text-center px-1 py-2 py-lg-4 mb-3">
          <h4 className="text-white fs-3 ">
            Tener un vehiculo en condiciones y licencia de conducir vigente es
            todo lo que necesitas!
          </h4>
        </div>

        {/* <div className="col-lg-6">
      <div className="card__imagen">
        <img src={logoImage} alt="" className="img-fluid" />
      </div>
    </div> */}

        {/* <h2 className="text-center fs-1 mb-lg-4">Manejate</h2> */}

        <div className="card__texto text-center m-auto px-1 py-2 py-lg-4 mb-3">
          <h4>
            Trabaja en el rango horario que mejor se adapte a tus necesidades y
            estilo de vida.
          </h4>
          <h4>Definí cuantas horas por día.</h4>

          <h4>
            Cuanto estes disponible losn destinos te llegarán a tu celular.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardUnirse2;
