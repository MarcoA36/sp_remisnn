import mapaImage from "../../imagenes/mapa.png";

const CardUnirse3 = () => {
  return (
    <div className="card__mapa rounded-4 text-center bg-success py-2">
      <div className="card__texto text-center px-1 py-2 py-lg-4">
        <h3 className="text-white fs-1 text-center">
          Desde nuestro lugar nos ocuparemos de hacerte llegar los destinos
          más cercanos a tu ubicación.
        </h3>
      </div>
       
      <img src={mapaImage} alt="mapa" className="rounded-4" />
    </div>
  );
};

export default CardUnirse3;
