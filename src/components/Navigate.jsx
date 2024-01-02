import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { FaUser, FaSignInAlt } from 'react-icons/fa';



function Navigate() {


  const [authenticated, setAuthenticated] = useState(false);

  // Logic to check user authentication status, e.g., from local storage or authentication context
  useEffect(() => {
    // Example logic to check authentication status from localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // User is authenticated
      setAuthenticated(true);
    } else {
      // User is not authenticated
      setAuthenticated(false);
    }
  }, []);
  return (
    <section id="home" className="nav-section">
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark" bg='dark' data-bs-theme='dark'>
      
      <Container>
      <Navbar.Brand href="#home">Jetwing Red <br/> <h6>Hotel & Resorts</h6></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href ="/About" >About</Nav.Link>
            <Nav.Link href="/Images" >Gallery</Nav.Link>
            <Nav.Link href="/Dining" >Dining</Nav.Link>
            <Nav.Link href="./PriceDetails">Pricing</Nav.Link>
            <Nav.Link href="/contact ">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
              <Nav.Link href="/Login"><FaSignInAlt /> U Login  </Nav.Link>
              {authenticated && (
              <Nav.Link href="/alogin"><FaSignInAlt /> A Login </Nav.Link>
              )}
              <Nav.Link href="/Registration"><FaUser /> U Register</Nav.Link>
              {authenticated && (
              <Nav.Link href="/adregister"><FaUser /> A Register</Nav.Link>
              )}
        </Nav>
              </Navbar.Collapse>
              </Container>
              </Navbar>
       </section>
  );
}

export default Navigate;