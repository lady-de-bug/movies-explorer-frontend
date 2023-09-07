import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import menu_icon from '../../images/icon__COLOR_icon-main.svg';
import menu_icon_black from '../../images/icon__BLACK_icon-main .svg';
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
            <button className="navigation__button" type="button">
              Аккаунт
            </button>
          </Link>
          <button
            className="navigation__burger-menu-button"
            type="button"
            onClick={handleOpen}
          >
            <img
              className="navigation__burger-menu-icon"
              src={location.pathname === '/' ? menu_icon : menu_icon_black}
              alt="Попап меню"
            />
          </button>

          {isBurgerOpened && <BurgerMenu handleClose={handleClose} />}
        </>
      ) : (
        <nav nav className="navigation__auth-list">
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
        </nav>
      )}
    </nav>
  );
}

export default Navigation;
