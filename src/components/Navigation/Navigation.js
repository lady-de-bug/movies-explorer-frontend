import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <ul className="navigation__list">
            <li>
              <Link className="navigation__link" to="/movies">
                Фильмы
              </Link>
            </li>
            <li>
              <Link className="navigation__link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          <Link to="/profile" className="navigation__profile-link">
            <button className="navigation__button">Аккаунт</button>
          </Link>
        </>
      ) : (
        
          <nav nav className="navigation__auth-list">
            <li className="navigation__auth-link">
              <Link to="/signup">
                <button className="navigation__signup-button">
                  Регистрация
                </button>
              </Link>
            </li>
            <li className="navigation__auth-link">
              <Link to="/signin">
                <button className="navigation__signin-button">Войти</button>
              </Link>
            </li>
          </nav>
        
      )}
    </nav>
  );
}

export default Navigation;
