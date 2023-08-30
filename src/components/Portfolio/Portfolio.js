import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="portfolio__content">
          <li className="portfolio__site-link">
            <a
              className="portfolio__site-name"
              href="https://github.com/lady-de-bug/how-to-learn#readme-ov-file"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
            <a
              className="portfolio__arrow-link"
              href="https://github.com/lady-de-bug/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__site-link">
            <a
              className="portfolio__site-name"
              href="https://github.com/lady-de-bug/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__arrow-link"
              href="https://github.com/lady-de-bug/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__site-link">
            <a
              className="portfolio__site-name"
              href="https://github.com/lady-de-bug/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__arrow-link"
              href="https://github.com/lady-de-bug/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
