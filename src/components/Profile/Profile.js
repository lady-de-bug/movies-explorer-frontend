import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Елена!</h1>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            type="text"
            name="name"
            placeholder="Елена"
            required
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input"
            type="email"
            name="email"
            placeholder="usebudet@horosho.ru"
            required
          />
        </label>
      </form>
      <div className="profile__submit-area">
        <button className="profile__button-edit" type="button">
          Редактировать
        </button>

        <button className="profile__button-exit" type="button" onClick={navigateHome}>
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
