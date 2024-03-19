import mapaImage from "../../imagenes/mapa.png";

const CardUnirse3 = () => {
  return (
    <div className="container card__mapa row py-2 px-1 p-md-2 p-lg-4 align-items-center text-center rounded-2 ">
      <div className="col-md-6 ">
        <h4 className="text-white text-center">
          Nosotros nos encargamos de mantenerte activo y conectado. Buscamos
          constantemente los destinos más cercanos a tu ubicación para
          asegurarnos de que siempre estés en movimiento.
        </h4>
        <h4 className="text-white">
          💬 Nos comprometemos a mantener una comunicación constante y efectiva
          con cada conductor.
        </h4>
      </div>

      <div className="col-md-6">
        <img src={mapaImage} alt="mapa" className="rounded-4" />
      </div>
    </div>
  );
};

export default CardUnirse3;
