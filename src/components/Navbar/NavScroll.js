import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './NavScroll.css';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink, useNavigate } from 'react-router-dom';


import { useState,useEffect } from 'react';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase';

// import Navbar2 from './Navbar'

function NavScroll() {

  
  const [categories, setCategories] = useState([]);
  useEffect (() => {

    // const collectionRef = collection(db, 'categories');
    const collectionRef = query(collection(db, 'categories',),orderBy('label'));

    // const categoriesRef = collection(db, "categories");
    // const q = query(categoriesRef, orderBy("categories"));

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()};
      });
      setCategories(categoriesAdapted);
    })
  },[categories])

  //Tambien puedo navergar con el Hook useNavigate
  const navigate = useNavigate();
  
  return (
    
    <Navbar bg="light" variant="light"  expand="lg">

      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}

        {/* <Navbar.Brand href="/"> */}

        {/* Puedo utilizar el as={Link} para implementar la navegación y no tengo que cambiar componentes ni clases */}
        <Navbar.Brand as={Link} to='/'>
          <div className="navbar-brand logo ml-3"> 
              <p className="logo1">TecnoPol</p>
              <p className="logo2">Tecnología de vanguardia</p>
          </div>
        </Navbar.Brand> 
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '200px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}

            {/* <Link to="/auriculares" className="nav-link">Auriculares</Link>
            <Link to="/celulares" className="nav-link">Celulares</Link> */}
            {/* <Nav.Link href="/celulares">Celulares</Nav.Link> */}
            
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
            

            {/* {console.log(categories)} */}
            {categories.map( cat => {
              return (<NavLink key ={cat.id} to={`/${cat.slug}`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>{cat.label}</NavLink>)
            })}
            
            {/* <NavLink to="/auriculares" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Auricaulares2</NavLink>
            <NavLink to="/celulares" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Celulares</NavLink> */}
            {/* <Nav.Link onClick={() => navigate('/celulares')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Celulares</Nav.Link> */}
            <NavLink to="/notebooks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Notebooks</NavLink>
            
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
          <Form className="d-flex my-2 me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark me-2">Search</Button>
            <CartWidget />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;