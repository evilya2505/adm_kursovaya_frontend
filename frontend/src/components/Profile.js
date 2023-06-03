import React from "react";
import Header from "./Header";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useInput from "./hooks/useInput";

function Profile({ isSending, isSuccess, handleSignOut, loggedIn, handlePageScroll, isError, handleEditProfileSubmit }) {
  // Подписывание компонента CurrentUserContext и получение значение контекста
  const currentUser = React.useContext(CurrentUserContext);
  const nameInput = useInput(currentUser.name, {isEmpty: true, minLength: 2, isName: true, isSame: true});
  const emailInput = useInput(currentUser.email, {isEmpty: true, minLength: 2, isEmail: true, isSame: true});

  function handleSubmit(e) {
    e.preventDefault();

    handleEditProfileSubmit({
      name: nameInput.value,
      email: emailInput.value
    });
  }

  function hadleExitBtn() {
    handleSignOut();
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        handlePageScroll={handlePageScroll}
      />
      <section className="form-page">
        <form className="form form_type_profile" onSubmit={handleSubmit} noValidate>
          <h3 className="form__title form__title_type_profile">{`Привет, ${currentUser.name}!`}</h3>
          <fieldset
            className="form__fieldset">
              <div className="form__info">
                <div className="form__item-section form__item-section_type_profile">
                  <p className="form__item-label form__item-label_type_profile">Имя</p>
                  <input
                    value={nameInput.value}
                    onChange={nameInput.handleInputChange}
                    onFocus={() => {nameInput.handleOnFocus(true)}}
                    id="userName"
                    type="text"
                    placeholder="Введите имя"
                    className="form__item form__item_type_profile"
                    name="userName"
                    required
                    readOnly={isSending}
                  />
                </div>
                <span className="form__item-error">
                  {(nameInput.isOnFocus && nameInput.errorText) && nameInput.errorText}
                </span>

                <div className="form__section-hl section-hl section-hl_type_gray"></div>

                <div className="form__item-section form__item-section_type_profile">
                  <p className="form__item-label form__item-label_type_profile">E-mail</p>
                  <input
                    value={emailInput.value}
                    onChange={emailInput.handleInputChange}
                    onFocus={() => {emailInput.handleOnFocus(true)}}
                    type="text"
                    placeholder="Введите почту"
                    className="form__item form__item_type_profile"
                    name="email"
                    required
                    readOnly={isSending}
                  />
                </div>
                <span className="form__item-error">
                  {(emailInput.isOnFocus && emailInput.errorText) && emailInput.errorText}
                </span>
              </div>
              <div className="form__btns">
                <span className="form__btns-error">{isError ? 'Произошла ошибка. Попробуйте снова.' : ''}</span>
                <span className="form__btns-success">{isSuccess ? 'Изменения успешно внесены.' : ''}</span>
                <button
                  type="submit"
                  className={((nameInput.inputValid && emailInput.inputValid) && !(nameInput.isSameError && emailInput.isSameError) && (!isSending))
                    ? `form__btn form__btn_type_text-black`
                    : `form__btn form__btn_type_text-black form__btn_type_text-black_disabled`}
                >
                  Редактировать
                </button>

                <button
                  type="button"
                  className="form__btn form__btn_type_text-red"
                  onClick={hadleExitBtn}
                >
                  Выйти из аккаунта
                </button>
              </div>

          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Profile;