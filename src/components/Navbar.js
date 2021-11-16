// import React from 'react'
// import styled from 'styled-components'
import { Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Navs() {
  return (
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/" className="orange"><strong>Tonia's Kitchen</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" href="/tonia-kitchen">Meals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="/tonia-kitchen/#/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="/tonia-kitchen/#/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
  )
}

export default Navs;
