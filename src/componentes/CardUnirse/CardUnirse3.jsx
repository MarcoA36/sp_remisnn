import mapaImage from "../../imagenes/mapa.png";

const CardUnirse3 = () => {
  return (
    <div className="card__mapa text-center bg-dark py-2 p-lg-4 rounded-2">
       <div className="row p-2  align-items-center">


       <div className="col-md-6 ">
        <h4 className="text-white text-center">
          Desde nuestro lugar nos ocupamos de hacerte llegar los destinos
          más cercanos a tu ubicación. 
        </h4>
        <h4 className="text-white">Para eso bucamos la mejor manera de tener una comunicación fluida con cada conductor.</h4>
        </div>

        <div className="col-md-6">
        <img src={mapaImage} alt="mapa" className="rounded-4" />
        </div>

       
       </div>
    
    </div>
  );
};

export default CardUnirse3;
