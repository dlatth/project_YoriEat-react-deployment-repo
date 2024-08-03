import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  const getActiveClass = (path: string) => {
    const baseClass = 'nav-icon';
    if (location.pathname === path) {
      switch (path) {
        case '/mainCategories':
          return `${baseClass} active home`;
        case '/script':
          return `${baseClass} active script`;
        case '/userDetail':
          return `${baseClass} active userDetail`;
        case '/like':
          return `${baseClass} active like`;
        case '/setting':
          return `${baseClass} active setting`;
        default:
          return baseClass;
      }
    }
    return baseClass;
  };

  return (
    <div className="navbar">
      <Link to="/mainCategories" className="nav-item">
        <div className={getActiveClass('/mainCategories')}>
          <img src="/images/Home.svg" alt="Home" className="nav-icon" />
        </div>
      </Link>
      <Link to="/script" className="nav-item">
        <div className={getActiveClass('/script')}>
          <img src="/images/Star.svg" alt="Script" className="nav-icon" />
        </div>
      </Link>
      <Link to="/userDetail" className="nav-item">
        <div className={getActiveClass('/userDetail')}>
          <img src="/images/User.svg" alt="User" className="nav-icon" />
        </div>
      </Link>
      <Link to="/like" className="nav-item">
        <div className={getActiveClass('/like')}>
          <img src="/images/Heart.svg" alt="Like" className="nav-icon" />
        </div>
      </Link>
      <Link to="/setting" className="nav-item">
        <div className={getActiveClass('/setting')}>
          <img src="/images/Setting.svg" alt="Setting" className="nav-icon" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
