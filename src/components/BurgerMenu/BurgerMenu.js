import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({handleClose}) {
  return (
    <div className="navigation__popup" /*onClick={handleClose}*/>
      <div className="navigation__popup-container">
        <button className="navigation__popup-close-icon" type="button" onClick={handleClose}/>
        <ul className="navigation__list1">
          <li>
            <Link className="navigation__link" to="/">
              Главная
            </Link>
          </li>
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
          <button className="navigation__button" type="button">
            Аккаунт
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
