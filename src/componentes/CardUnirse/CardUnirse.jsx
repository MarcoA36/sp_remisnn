import logoImage from "../../imagenes/manejando-sm.jpg";
import "./CardUnirse.css"
const CardUnirse = () => {
  return (
    <div className="row card__unirse card__unirse--1 align-items-center bg-success rounded-3 py-1 p-lg-4">
        <h2 className="text-center fs-1 mb-lg-4">Trabaja con nosotros!</h2>
        <h3 className="mb-3 text-center">
              Somos una sociedad colaborativa abierta al crecimiento. Le damos la bienvenida a todo aquel que este dispuesto a sumar valor a este emprendimiento.
            </h3>

        <div className="col-lg-6 bg-success py-2 p-lg-4 rounded">
          <div className="card__texto text-center p-1 py-lg-4">
            <h4 className="text-dark fs-2">
              Tener un vehiculo en condiciones y licencia de conducir vigente es todo lo que necesitas para empezar.
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