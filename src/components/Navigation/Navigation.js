import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({ isLoggedIn }) {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const handleOpen = () => {
    setIsBurgerOpened(true);
  };
  const handleClose = () => {
    setIsBurgerOpened(false);
  };
  const location = useLocation();
  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <ul
            className={
              location.pathname === '/'
                ? 'navigation__list navigation__list_white'
                : 'navigation__list'
            }
          >
            <li className="navigation__list-item">
              <Link
                className={
                  location.pathname === '/movies'
                    ? 'navigation__link navigation__link_active'
                    : 'navigation__link'
                }
                to="/movies"
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                className={
                  location.pathname === '/saved-movies'
                    ? 'navigation__link navigation__link_active'
                    : 'navigation__link'
                }
                to="/saved-movies"
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link to="/profile" className="navigation__profile-link">
            Аккаунт
          </Link>
          <button
            className={
              location.pathname === '/'
                ? 'navigation__burger-button navigation__burger-button_type_white'
                : 'navigation__burger-button navigation__burger-button_type_black'
            }
            type="button"
            onClick={handleOpen}
          ></button>

          {isBurgerOpened && <BurgerMenu handleClose={handleClose} />}
        </>
      ) : (
        <ul nav className="navigation__auth-list">
          <li className="navigation__auth-link">
            <Link to="/signup">
              <button className="navigation__signup-button" type="button">
                Регистрация
              </button>
            </Link>
          </li>
          <li className="navigation__auth-link">
            <Link to="/signin">
              <button className="navigation__signin-button" type="button">
                Войти
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
