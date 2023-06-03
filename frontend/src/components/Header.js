import React from "react";
import authorizedLogoPath from "../images/logo.svg";
import loginPath from "../images/login.svg";
import { Link, useLocation, Redirect } from "react-router-dom";

function Header({ loggedIn, handlePageScroll }) {
  const [isOpened, setIsOpened] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    handlePageScroll(isOpened);
  }, [isOpened, handlePageScroll]);

  function redirectToProfilePage() {
    return <Redirect to="/profile" />;
  }

  function handleBtn(e) {
    if (e.target.classList.contains("header__burger-btn")) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }

  function renderMenuList() {
    if (loggedIn) {
      return (
        <>
          <ul className="header__menu-list">
            {document.body.clientWidth <= 768 && isOpened && (
              <li className="header__menu-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? `header__menu-link header__menu-link_active`
                      : `header__menu-link`
                  }
                >
                  Главная
                </Link>
              </li>
            )}
            <li className="header__menu-item">
              <Link
                to="/saved-movies"
                className={
                  location.pathname === "/saved-movies"
                    ? `header__menu-link header__menu-link_active`
                    : `header__menu-link`
                }
              >
                Сохраненные результаты
              </Link>
            </li>
          </ul>
          <Link to="/profile" className="header__menu-link">
            <button className="header__btn" onClick={redirectToProfilePage}>
              Аккаунт
              <img src={loginPath} alt="" className="header__btn-img" />
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <Link to="/signup" className="header__menu-link">
              Регистрация
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/signin"
              className="header__menu-link header__menu-link_type_black"
            >
              Войти
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <div
      className={
        location.pathname === "/"
          ? "page__header-wrapper page__header-wrapper_type_colored"
          : "page__header-wrapper"
      }
    >
      <header
        className={
          loggedIn
            ? `header page__header`
            : `header page__header header_type_unauth`
        }
      >
        <Link to="/" className="header__link">
          <img
            src={authorizedLogoPath}
            alt="изображение логотипа"
            className="header__logo"
          />
        </Link>
        <button className="header__burger-btn" onClick={handleBtn} />
        <div
          className={
            isOpened
              ? `header__wrapper header__wrapper_opened`
              : `header__wrapper`
          }
        >
          <div className="header__menu-wrapper">
            <button className="header__close-btn" onClick={handleBtn} />
            <div className="header__menu">{renderMenuList()}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
