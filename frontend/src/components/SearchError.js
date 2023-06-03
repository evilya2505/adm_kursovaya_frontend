import React from "react";
import searcErrorPath from '../images/search-error.svg';

function SearchError(props) {
  return (
    <section className="search-error">
      <h2 className="search-error__title">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
      <img className="search-error__img" alt="возникла ошибка" src={searcErrorPath} />
    </section>
  )
}

export default SearchError;