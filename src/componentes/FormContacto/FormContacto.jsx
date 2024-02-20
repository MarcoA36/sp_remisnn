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
    <div className="form__container">
    
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
            placeholder="tu nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="input-email"
            placeholder="correo@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input-consulta" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control"
            name="user_message"
            id="input-consulta"
            rows="5"
          ></textarea>
        </div>
        {isSuccess && <div className="alert alert-success bg-success text-white">¡Mensaje enviado con éxito!</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-dark w-100">
          Enviar
        </button>
      </form>
      
    </div>
  );
};

export default FormContacto;
