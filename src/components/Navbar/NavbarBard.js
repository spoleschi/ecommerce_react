import React from "react";
import { Nav, NavLink } from "react-router-dom";
import './NavbarBard.css';

const Navbar = () => {
  return (
    <Nav className="navbar">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;