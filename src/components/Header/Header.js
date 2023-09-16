import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
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
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
