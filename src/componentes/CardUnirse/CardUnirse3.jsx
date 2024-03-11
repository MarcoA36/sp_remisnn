import mapaImage from "../../imagenes/mapa.png";

const CardUnirse3 = () => {
  return (
  
       <div className="card__mapa row py-2 px-1 p-md-2 p-lg-4 align-items-center text-center bg-dark rounded-2 ">

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
    
  );
};

export default CardUnirse3;
