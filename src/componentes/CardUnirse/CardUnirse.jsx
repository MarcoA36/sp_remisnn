import logoImage from "../../imagenes/manejando-sm.jpg";
import "./CardUnirse.css"
const CardUnirse = () => {
  return (
    <div className="row card__unirse card__unirse--1 py-2 px-1 p-md-2 p-lg-4 align-items-center bg-dark rounded-3">
        <h2 className="text-center text-success fs-1 mb-lg-4">Trabaja con nosotros!</h2>

        <div className="col-lg-6 py-2 p-lg-4 rounded">
          <div className="card__texto text-white text-center px-1 py-2 py-lg-4 bg-secondary">
            <h4 className="text-white fs-3 ">
            ¿Tienes un vehículo en buenas condiciones y una licencia de conducir vigente? ¡Entonces estás listo para empezar!
            </h4>
           
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card__imagen">
            <img src={logoImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
  )
}

export default CardUnirse