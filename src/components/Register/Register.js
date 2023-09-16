import React from 'react';
import './Register.css';
import Form from '../Form/Form';

function Register() {
  return (
    <main>
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        questionText="Уже зарегистрированы?"
        linkText="Войти"
        link="/signin"
      >
        <label className="form__label">
          Имя
          <input
            className="form__input form__input_type_name"
            type="text"
            name="name"
            placeholder="Елена"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="form__error"></span>
        </label>

        <label className="form__label">
          E-mail
          <input
            className="form__input form__input_type_email"
            type="email"
            name="email"
            placeholder="usebudet@horosho.ru"
            required
          />
          <span className="form__error"></span>
        </label>
        <label className="form__label">
          Пароль
          <input
            className="form__input form__input_type_password"
            required
            name="password"
            type="password"
            placeholder="••••••••••••••"
            minLength="8"
            maxLength="30"
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>
      </Form>
    </main>
  );
}

export default Register;
