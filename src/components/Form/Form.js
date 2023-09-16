import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import Logo from '../Logo/Logo';

function Form({
  name,
  title,
  children,
  buttonName,
  questionText,
  linkText,
  link,
}) {
  return (
    <section className={`form form_type_${name}`}>
      <Logo className="form__logo" />
      <h1 className="form__title">{title}</h1>
      <form className="form__container">
        {children}
        <button className="form__button" type="submit">
          {buttonName}
        </button>
      </form>

      <div className="form__choose-area">
        <p className="form__text">{questionText}</p>
        <Link className="form__link" to={link}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}

export default Form;
