import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          required
        />

        <button className="search-form__button" type="submit" />
      </form>
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
