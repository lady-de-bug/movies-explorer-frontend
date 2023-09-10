import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <div className="saved-movies__container">
        <SearchForm />
        <MoviesCardList />
      </div>

      <Footer />
    </section>
  );
}

export default SavedMovies;
