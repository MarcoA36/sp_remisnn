
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
            ¿Tienes un vehículo en buenas condiciones y una licencia de conducir
            vigente? ¡Entonces estás listo para empezar!
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
                ⏳ Define tus propios horarios de trabajo. ¡Tu tiempo es tuyo!
              </h4>
              <h4 className="mb-3 mb-lg-5">
                🕥 Trabaja en el rango horario que mejor se adapte a tus
                necesidades y estilo de vida.
              </h4>
              <h4>
                Elige dónde pasar tu tiempo mientras esperas ser asignado a un
                viaje. Los destinos te llegarán directamente a tu celular.
              </h4>
            </div>
       
 
      </div>
    </div>
  );
};

export default CardUnirse2;
