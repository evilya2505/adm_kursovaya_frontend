import React from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function MoviesCard({
  result,
  levenshteinDistance,
  firstText,
  secondText,
  handleDeleteBtnClick,
}) {
  // Подписывание компонента CurrentUserContext и получение значение контекста
  const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = React.useState(false);

  // Обработчик нажатия по кнопке удаления
  function handleDeleteBtn() {
    handleDeleteBtnClick(result);
  }

  return (
    <li className="card cards__card">
      <p className="card__subtitle">
        Расстояние Левинштейна: {levenshteinDistance}
      </p>

      <p className="card__subtitle">Текст 1: {firstText}</p>

      <p className="card__subtitle">Текст 2: {secondText}</p>

      <Switch>
        <Route exact path="/saved-movies">
          <button
            className="card__like-btn card__like-btn_type_delete"
            onClick={handleDeleteBtn}
          />
        </Route>
      </Switch>
    </li>
  );
}

export default MoviesCard;
