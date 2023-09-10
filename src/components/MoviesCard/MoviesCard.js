import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import movie from '../../images/movie-card1.jpg';

function MoviesCard() {
  const location = useLocation();

  return (
  
    <article className="movies-card">
      <img className="movies-card__image" src={movie} alt="Фильм" />
      <div className="movies-card__mask_group">
        <div className="movies-card__caption">
          <h2 className="movies-card__name">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч42м</p>
        </div>
        <button
          className={
            location.pathname === '/movies'
           ? 'movies-card__button movies-card__button_active'
              // ? 'movies-card__button movies-card__button_type_default'
              : 'movies-card__button movies-card__button_type_delete'
          }
          type="button"

        ></button>
      </div>
    </article>
  );
}

export default MoviesCard;
