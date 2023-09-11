import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Елена!</h2>
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
        <button className="profile__button-edit">
          Редактировать
        </button>
        <button className="profile__button-exit">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
