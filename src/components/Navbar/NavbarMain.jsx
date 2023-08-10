
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
import { Link } from 'react-router-dom';

function NavbarMain() {

  return (
    <>
      {['sm'].map((expand) => (
  <div className="navbarStyle">
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-1">
          <Container fluid id='containerfluid'>
          
            <div className='imageNav'>     
          <img src="./tinerary.png" alt="logo" id='navImg' />
          </div>
            <Navbar.Brand href="#" > My Tinerary</Navbar.Brand>
            
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
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
      ))}
    </>
  );
}

export default NavbarMain;