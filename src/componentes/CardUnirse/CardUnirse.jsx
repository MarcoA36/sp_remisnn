import logoImage from "../../imagenes/card2.png";
import "./CardUnirse.css"
const CardUnirse = () => {
  return (
    <div className="row card__unirse">
        <div className="col-md-6">
          <div className="card__texto">
            <h2>Trabajar con nosotros</h2>
            <p>
              Somos una sociedad colaborativa abierta al crecimiento. Por eso es
              bienvenido todo aquel que este dispuesto a sumar valor a este emprendimiento.
            </p>
            <p>
              Contar con un vehiculo en condiciones es todo lo que necesitas.
            </p>
            <p>
              ⏳ El tiempo que vas a trabajar lo definis vos.
            </p>
            <p>🕥 Asi como en el rango
              horario que lo vas a hacer.</p>
            <p>🚩
              El lugar donde vas a pasar el tiempo mientras esperas ser asignado
              a un viaje, tambien lo definis vos, ya que los destinos te llegan a tu celular. <br />
              Mantenernos informado de tu ubicacion es todo lo que necesitamos
              para operar de forma eficiente.
            </p>
            <p></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card__imagen">
            <img src={logoImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
  )
}

export default CardUnirse