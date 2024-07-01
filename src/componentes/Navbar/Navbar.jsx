import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
// import logoImage from '../../imagenes/card2.png';
import logoImage from '../../imagenes/coche.png';
import { useState } from 'react';

function Navegacion() {
  const [expanded, setExpanded] = useState(false);
  const numeroWhatsApp = '+5492284515431';

  const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent('Hola, me podrás mandar un auto???');
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  // const handleNavCollapse = () => {
  //   setExpanded(false);  // Cerrar el menú al hacer clic en un enlace
  // };

  const handleNavCollapse = () => {
    if (expanded) {
      setExpanded(false); // Solo cerrar el menú si está actualmente expandido
    }
  };
  return (
    <Navbar expand="lg" expanded={expanded} className="navbar__container text-white sticky-top">
      <Container >
        <Navbar.Brand as={Link} to="/" className='navbar__brand' onClick={handleNavCollapse}>
        <img
            src={logoImage}
            alt="Logo"
            width="110"
            // height="50"
            className="d-inline-block align-top navbar__brand--img"
          />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar__toggle' onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav"  onClick={handleNavCollapse}>
          <Nav className="me-auto">
            <Nav.Link onClick={abrirWhatsApp} className='navbar__link text-success'>Pedir coche</Nav.Link>
            <Nav.Link as={Link} to="/tarifas" className='navbar__link'>Tarifas</Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" className='navbar__link'>Quienes somos</Nav.Link>       
            <Nav.Link as={Link} to="/unirse" className='navbar__link'>Unirse</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className='navbar__link'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;

