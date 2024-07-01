import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 footer__contacto">
            <p>Olavarría, Buenos Aires</p>
            <p>2284 656640</p>
            <p>info@remis.com</p>
            <p>www.remis.com</p>
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
                <Link to="/unirse">Unirse</Link>
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
              &copy; {new Date().getFullYear()} Remis. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
