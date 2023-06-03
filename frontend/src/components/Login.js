import React from "react";
import logoPath from '../images/logo.svg';
import { Link } from 'react-router-dom';
import useInput from "./hooks/useInput";

function Login({ isSending, handleLoginSubmit, isError }) {
  const emailInput = useInput('', {isEmpty: true, minLength: 2, isEmail: true});
  const passwordInput = useInput('', {isEmpty: true, minLength: 2});

  // Обработчик кнопки сабмита
  function handleSubmit(e) {
    e.preventDefault();

    handleLoginSubmit({
      email: emailInput.value,
      password: passwordInput.value,
    });
  }

  return (
    <section className="form-page">
      <form className="form form_type_auth" onSubmit={handleSubmit} noValidate>
        <img alt="логотип" className="form__logo" src={logoPath} />
        <h3 className="form__title form__title_type_auth">Рады видеть!</h3>
        <fieldset
          className="form__fieldset">
            <div className="form__info">

              <div className="form__item-section form__item-section_type_auth">
                <p className="form__item-label form__item-label_type_auth">E-mail</p>
                <input
                  value={emailInput.value}
                  onChange={emailInput.handleInputChange}
                  onFocus={() => {emailInput.handleOnFocus(true)}}
                  type="text"
                  className="form__item form__item_type_auth"
                  name="email"
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
                className={(emailInput.inputValid && passwordInput.inputValid && !isSending)
                  ? `form__btn form__btn_type_rectangle`
                  : `form__btn form__btn_type_rectangle form__btn_type_rectangle_disabled`}
              >
                Войти
              </button>
              <p className="form__subtitle">Еще не зарегистрированы? <Link to="/signup" className="form__link">Регистрация</Link></p>
            </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Login;