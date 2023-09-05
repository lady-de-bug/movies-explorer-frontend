import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <section classname="movies">
      <SearchForm />
      <MoviesCardList />
      <ShowMore />
      <Footer />
    </section>
  );
}

export default Movies;
