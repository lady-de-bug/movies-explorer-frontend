import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/popup" element={<MenuPopup />} />
      </Routes>
    </div>
  );
}

export default App;
