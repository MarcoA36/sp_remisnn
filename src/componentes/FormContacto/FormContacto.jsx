import React from "react";
import "./FormContacto.css";

const FormContacto = () => {
  return (
    <div className="form__container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="correo@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormContacto;
