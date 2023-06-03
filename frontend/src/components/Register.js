import React from "react";
import logoPath from '../images/logo.svg';
import { Link } from 'react-router-dom';
import useInput from "./hooks/useInput";

function Register({ isSending, handleRegisterSubmit, isError }) {
  const nameInput = useInput('', {isEmpty: true, minLength: 2, isName: true});
  const emailInput = useInput('', {isEmpty: true, minLength: 2, isEmail: true});
  const passwordInput = useInput('', {isEmpty: true, minLength: 2});

  // Обработчик кнопки сабмита
  function handleSubmit(e) {
    e.preventDefault();

    handleRegisterSubmit({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  }

  return (
    <section className="form-page">
      <form className="form form_type_auth" onSubmit={handleSubmit} noValidate>
        <img alt="логотип" className="form__logo" src={logoPath} />
        <h3 className="form__title form__title_type_auth">Добро пожаловать!</h3>
        <fieldset className="form__fieldset">
            <div className="form__info">
              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">Имя</p>
                <input
                  value={nameInput.value}
                  onChange={nameInput.handleInputChange}
                  onFocus={() => {nameInput.handleOnFocus(true)}}
                  id="userName"
                  type="text"
                  className="form__item form__item_type_auth"
                  name="userName"
                  minLength="2"
                  maxLength="30"
                  readOnly={isSending}
                  required
                />
                <span className="form__item-error">
                  {(nameInput.isOnFocus && nameInput.errorText) && nameInput.errorText}
                </span>
              </div>

              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">E-mail</p>
                <input
                  value={emailInput.value}
                  onChange={emailInput.handleInputChange}
                  onFocus={() => {emailInput.handleOnFocus(true)}}
                  type="text"
                  className="form__item form__item_type_auth"
                  name="email"
                  minLength="2"
                  readOnly={isSending}
                  required
                />
                <span className="form__item-error">
                  {(emailInput.isOnFocus && emailInput.errorText) && emailInput.errorText}
                </span>
              </div>

              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">Пароль</p>
                <input
                  value={passwordInput.value}
                  onChange={passwordInput.handleInputChange}
                  onFocus={() => {passwordInput.handleOnFocus(true)}}
                  type="password"
                  className="form__item form__item_type_auth"
                  name="password"
                  minLength="2"
                  readOnly={isSending}
                  required
                />
                <span className="form__item-error">
                  {(passwordInput.isOnFocus && passwordInput.errorText) && passwordInput.errorText}
                </span>
              </div>
            </div>
            <div className="form__btns">
              <span className="form__btns-error">{isError ? 'Произошла ошибка. Попробуйте снова.' : ''}</span>
              <button
                type="submit"
                className={(nameInput.inputValid && emailInput.inputValid && passwordInput.inputValid && !isSending) ? `form__btn form__btn_type_rectangle` : `form__btn form__btn_type_rectangle form__btn_type_rectangle_disabled`}
              >
                Зарегистрироваться
              </button>
              <p className="form__subtitle">
                  Уже зарегистрированы?
                  <Link to="/signin" className="form__link"> Войти</Link>
              </p>
            </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Register;