import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-img" src={logo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
