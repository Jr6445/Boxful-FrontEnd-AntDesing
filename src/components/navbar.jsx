import React from 'react';
import logo from '../Resources/boxful.svg'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
    </nav>
  );
}

export default Navbar;
