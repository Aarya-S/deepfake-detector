import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navbar2 = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar2