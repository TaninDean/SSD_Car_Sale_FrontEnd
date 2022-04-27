import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav ,Container} from "react-bootstrap"


const NavBar = () => {
  return (
    <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Car Sale</Navbar.Brand>
    <Nav className="me-left ">
      <Nav.Link href="#home">Buy</Nav.Link>
      <Nav.Link href="#features">Add car</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default NavBar