import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Learning Path</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
