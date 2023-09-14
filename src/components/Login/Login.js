import React from 'react';
import './Login.css';
import Form from '../Form/Form';

function Login() {
  return (
    <Form
      name="login"
      title="Рады видеть!"
      buttonName="Войти"
      questionText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signin"
    >
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
          type="text"
          placeholder="••••••••••••••"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Login;
