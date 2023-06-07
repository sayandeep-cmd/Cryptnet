import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function OnlyNavbar() {
  let token=window.sessionStorage.getItem("token")
  let username=window.sessionStorage.getItem("username")
  console.log(username)


  
  return (
    <Navbar expand="lg" className='mainnav'>
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="../Assets/Cryptnet.png" height='50'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/about">About</Nav.Link>
       <Nav.Link as={Link} to="/Contact" style={{paddingLeft:10}}>Contact</Nav.Link>

            
            
            
          
          {token?<>
          <Nav className="me-auto"><Nav.Link as={Link} to="/coin-list">Coins</Nav.Link></Nav>
          
            <NavDropdown title={`${username}`} id="basic-nav-dropdown">

              
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
            </NavDropdown></>:console.log("error")}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OnlyNavbar;