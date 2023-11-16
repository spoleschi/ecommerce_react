import React from "react";
import { Nav } from 'react-bootstrap'  
import {  NavLink } from "react-router-dom";
import './NavbarBard.css';

const NavbarBard = () => {
  return (
    <Nav className="navbar">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </Nav>
  );
};

export default NavbarBard;