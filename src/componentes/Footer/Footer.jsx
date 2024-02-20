import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 footer__contacto">
            <p>Calle Sin nombre 123, Olavarría</p>
            <p>(123) 456-7890</p>
            <p>info@remisnn.com</p>
            <p>iwww.remisnnolavaria.com</p>
          </div>
          <div className="col-md-6 footer__enlaces d-none d-sm-block">
            <ul>
              <li>
                <Link to="/tarifas">Tarifas</Link>
              </li>
              <li>
                <Link to="/quienes-somos">Quienes somos</Link>
              </li>
              <li>
                <Link to="/unirse">Unirse a NN</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <p>
              &copy; {new Date().getFullYear()} Remis NN Olavarría. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
