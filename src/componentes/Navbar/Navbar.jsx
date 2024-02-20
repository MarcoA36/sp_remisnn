import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import logoImage from '../../imagenes/card2.png';
function Navegacion() {

  const numeroWhatsApp = '2284656640';

  const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola, me podrás mandar un auto???');
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  return (
    <Navbar expand="lg" className="navbar__container text-white sticky-top">
      <Container >
        <Navbar.Brand as={Link} to="/" className='navbar__brand'>
        <img
            src={logoImage}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Remis NN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar__toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={abrirWhatsApp} className='navbar__link text-success'>Pedir coche</Nav.Link>
            <Nav.Link as={Link} to="/tarifas" className='navbar__link'>Tarifas</Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" className='navbar__link'>Quienes somos</Nav.Link>       
            <Nav.Link as={Link} to="/unirse" className='navbar__link'>Unirse a NN</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className='navbar__link'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
