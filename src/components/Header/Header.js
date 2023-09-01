import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  const location = useLocation();
  const headerClassName =
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile'
      ? 'header header_white'
      : 'header';
      
  return (
    <header className={headerClassName}>
      <Link to="/" className="header__logo-link">
        <img className="header__logo-img" src={logo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
