import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import Collapse from 'react-bootstrap/Collapse'
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';



const Navstyle = styled.nav`
  height:50px;
  background-color: red;
`

function Navs() {
  return (
    <Navstyle>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Holmes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Homes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
    </Navstyle> 
  )
}


export default Navs
