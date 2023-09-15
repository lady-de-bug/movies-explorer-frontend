import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <ShowMore />
      <Footer />
    </main>
  );
}

export default Movies;
