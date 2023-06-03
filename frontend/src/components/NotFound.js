import React from "react";
import { useHistory } from 'react-router-dom';

function NotFound(props) {
  const history = useHistory();

  function handleGoBackBtn() {
    history.goBack(-1);
    history.goBack(-1);
    history.goBack(-1);
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitile">Страница не найдена</p>
      <button type="button" className="not-found__link" onClick={handleGoBackBtn}>Назад</button>
    </section>
  )
}

export default NotFound;