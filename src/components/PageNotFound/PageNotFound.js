import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="error-page">
      <h2 className="error-page__name">404</h2>
      <p className="error-page__description">Страница не найдена</p>
      <Link to="/" className="error-page__back-link">
        Назад
      </Link>
    </main>
  );
}

export default PageNotFound;
