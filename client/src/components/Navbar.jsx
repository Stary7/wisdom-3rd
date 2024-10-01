import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Optional: import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/developers">Developers</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/towers">Towers</Link>
      <Link to="/series">Series</Link>
    </nav>
  );
};

export default Navbar;
