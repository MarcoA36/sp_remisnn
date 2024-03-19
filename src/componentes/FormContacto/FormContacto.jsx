import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";
import "./FormContacto.css";



const FormContacto = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6915ubb", "template_63bqo0r", form.current, {
        publicKey: "LybJfHsngnMNhmfOs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          // setTimeout(() => {
          //   navigate("/");
          // }, 5000);

        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrorMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        }
      );
  };

  return (
    <div className="form__container bg-dark">
    
      <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
          <label htmlFor="input-name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="input-name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input-contacto" className="form-label">
            Contacto
          </label>
          <input
            type="text"
            name="user_contacto"
            className="form-control"
            id="input-contacto"
            placeholder="Whatsapp o Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input-mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            name="message"
            id="input-mensaje"
            rows="5"
          ></textarea>
        </div>
        {isSuccess && <div className="alert alert-success bg-success text-white">¡Mensaje enviado con éxito!</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-secondary w-100 btn__enviar">
          Enviar
        </button>
      </form>
      
    </div>
  );
};

export default FormContacto;
