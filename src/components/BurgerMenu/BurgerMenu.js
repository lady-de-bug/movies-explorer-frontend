import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ handleClose }) {
  const location = useLocation();
  return (
    <div className="burger-menu" /*onClick={handleClose}*/>
      <div className="burger-menu__popup-container">
        <button
          className="burger-menu__popup-close-icon"
          type="button"
          onClick={handleClose}
        />
        <ul className="burger-menu__list">
          <li>
            <Link className="burger-menu__link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/movies'
                  ? 'burger-menu__link burger-menu__link_active'
                  : 'burger-menu__link'
              }
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/saved-movies'
                  ? 'burger-menu__link burger-menu__link_active'
                  : 'burger-menu__link'
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>

        <Link to="/profile" className="burger-menu__button">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
