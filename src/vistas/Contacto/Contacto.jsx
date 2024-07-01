import "./Contacto.css";
import FormContacto from "../../componentes/FormContacto/FormContacto";

const Contacto = () => {
  return (
    <div className="container contacto__container my-4">
      <div className="animated"></div>
      <div className="contacto_form">
        <FormContacto />
      </div>

      <div className="mensaje mt-4 bg-secondary p-4">
        <p className="text-center">
          Si su consulta no fue respondida en menos de 48 hs, puede reenviarla
          por alguno de estos medios:
        </p>
        <h4>info@remis.com</h4>
      </div>
    </div>
  );
};

export default Contacto;
