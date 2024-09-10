import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Registration</Link> 
    </nav>
  );
};

export default Navbar;

