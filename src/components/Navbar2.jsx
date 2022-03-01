import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar2.css';

const Navbar2 = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="/" style={{margin: "7px 30px 7px 20px"}}>Deepfake Detector</Navbar.Brand>
        <Nav className='redirects-area'>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/image'>Image</Nav.Link> 
          <Nav.Link href='/video'>Video</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}


export default Navbar2;