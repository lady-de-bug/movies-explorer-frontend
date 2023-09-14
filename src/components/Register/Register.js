import React from 'react';
import './Register.css';
import Form from '../Form/Form';

function Register() {
  return (
    <Form
      name="register"
      title="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkText="Войти"
      link="/signup"
    >
      <label className="form__label">
        Имя
        <input
          className="form__input form__input_type_name"
          type="text"
          name="name"
          placeholder="Елена"
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
          type="text"
          placeholder="••••••••••••••"
        />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Register;
