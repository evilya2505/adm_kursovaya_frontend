import React from "react";

function MoviesCard({
  result,
  levenshteinDistance,
  firstText,
  secondText,
  handleDeleteBtnClick,
}) {
  // Обработчик нажатия по кнопке удаления
  function handleDeleteBtn() {
    handleDeleteBtnClick(result);
  }

  return (
    <li className="card cards__card">
      <p className="card__subtitle">
        Расстояние Левенштейна: {levenshteinDistance}
      </p>

      <p className="card__subtitle">Текст 1: {firstText}</p>

      <p className="card__subtitle">Текст 2: {secondText}</p>

      <button
        className="card__like-btn card__like-btn_type_delete"
        onClick={handleDeleteBtn}
      />
    </li>
  );
}

export default MoviesCard;
