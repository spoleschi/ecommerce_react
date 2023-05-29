import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './NavScroll.css';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavScroll() {
  return (
    <>
    <style type="text/css">
    {`
    .bg-blue {
        background-color: blue;
        color: white;
    }

    // .nav-link {
    //     color: red;
    // }

    `}
    </style>

    <Navbar bg="light" variant="light"  expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}

        <Navbar.Brand href="#home">
          <a class="navbar-brand logo ml-3" href="./index.html"> 
              <p class="logo1">Mondony</p>
              <p class="logo2">Muebles, arte y diseño</p>
          </a>
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success me-2">Search</Button>
            <CartWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScroll;