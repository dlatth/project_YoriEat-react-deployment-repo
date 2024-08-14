import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navBar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      <div className="nav-item" onClick={handleClickBack}>
        <img src="/images/Back.png" alt="Back" className="nav-icon-back" />
      </div>
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
      <Link to="/recentViews" className="nav-item">
        <img src="/images/RecentViews.png" alt="RecentViews" className="nav-icon-recent" />
      </Link>
    </div>
  );
};

export default Navbar;
