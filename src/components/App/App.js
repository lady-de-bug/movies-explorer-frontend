import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies />
            </>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
              </Routes>
    </div>
  );
}

export default App;
