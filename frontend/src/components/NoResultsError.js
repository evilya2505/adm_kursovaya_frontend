import React from "react";
import nothingFound from '../images/nothing-found.svg';

function NoResultsError(props) {
  return (
    <section className="search-error">
      <h2 className="search-error__title">По вашему запросу ничего не найдено.</h2>
      <img className="search-error__img" alt="возникла ошибка" src={nothingFound} />
    </section>
  )
}

export default NoResultsError;