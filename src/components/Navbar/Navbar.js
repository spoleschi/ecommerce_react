import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css'

function NavbarMondony() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <a className="navbar-brand logo ml-3" href="./index.html"> 
                <p className="logo1">Mondony</p>
                <p className="logo2">Muebles, arte y diseño</p>
            </a> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          
            <Nav classNameName="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMondony;