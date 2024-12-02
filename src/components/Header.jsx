
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Header() {
  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        {/* BMW Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" // Replace with your desired BMW logo URL
            alt="BMW Logo"
            width="40"
            height="40"
            className="me-2"
          />
          BMW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#models">Models</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    
    </>
  )
}

export default Header