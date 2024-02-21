import "./Contacto.css"
import FormContacto from "../../componentes/FormContacto/FormContacto";


const Contacto = () => {
  return (
    <div className="container contacto__container my-4">
        <FormContacto />  

        <div className="mensaje mt-4 bg-secondary p-4">
          <h3 className="text-info">Si su consulta no fue respondida en menos de 48 hs, puede reenviarla por alguno de estos medios:</h3>
          <h4>2284656640</h4>
          <h4>info@remisnn.com</h4>
          </div>   
    </div>
  );
};

export default Contacto;
