import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <div className="navbarStyle">
      <Navbar expand="sm" className="bg-body-tertiary mb-1">
        <Container fluid id='containerfluid'>
          <div className='imageNav'>     
            <img src="./tinerary.png" alt="logo" id='navImg' />
          </div>
          <Navbar.Brand href="#">My Tinerary</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
             <Offcanvas.Header closeButton>
    <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
      Menu
    </Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <div className='urls'>
      <Link to="/">Home</Link>
      <Link to="/cities">Cities</Link>
    </div>
  </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className='imageNav'>    
            <img src="/user.png" alt="" />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
