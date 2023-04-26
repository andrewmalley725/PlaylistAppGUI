import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="\" style={{paddingLeft:'20px'}}>PlaylistApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/songs">Songs</Nav.Link>
          {!localStorage.getItem('userId') ? <Nav.Link href="/signup">Sign Up</Nav.Link> : <></>}
          {!localStorage.getItem('userId') ? <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link href="/" onClick={() => localStorage.clear()}>Logout</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
