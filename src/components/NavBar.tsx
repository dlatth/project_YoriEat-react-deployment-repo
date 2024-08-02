import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/main-categories" className="nav-item">
        Main Categories
      </Link>
      <Link to="/script" className="nav-item">
        Script
      </Link>
      <Link to="/userDetail" className="nav-item">
        User Detail
      </Link>
      <Link to="/like" className="nav-item">
        Like
      </Link>
    </div>
  );
};

export default Navbar;
