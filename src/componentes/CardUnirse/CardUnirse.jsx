import logoImage from "../../imagenes/manejando-sm.jpg";
import "./CardUnirse.css"
const CardUnirse = () => {
  return (
    <div className="row card__unirse card__unirse--1 align-items-center bg-success rounded-3 py-1 p-lg-4">
        <h2 className="text-center fs-1 mb-lg-4">Trabajar con nosotros</h2>
        <h3 className="mb-3 text-center">
              Somos una sociedad colaborativa abierta al crecimiento. Por eso es
              bienvenido todo aquel que este dispuesto a sumar valor a este emprendimiento.
            </h3>

        <div className="col-lg-6 bg-success p-lg-4 rounded">
          <div className="card__texto text-center">
            <h3 className="text-dark fs-2">
              Tener un vehiculo en condiciones y licencia de conducir vigente es todo lo que necesitas para empezar.
            </h3>
           
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