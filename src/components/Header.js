import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="#home" className="navbar-brand">Fundraiser</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#trending">Trending Campaigns</Nav.Link>
          <Nav.Link href="#steps">How It Works</Nav.Link>
          <Nav.Link href="#start">Start Fundraising</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
