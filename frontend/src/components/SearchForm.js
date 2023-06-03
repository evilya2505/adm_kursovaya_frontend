import React from "react";
import useInput from "./hooks/useInput";

function SearchForm({ handleSearchButton, handleResetSearchResults }) {
  const searchInput = useInput("", { isEmpty: true });

  function handleButton(e) {
    e.preventDefault();

    searchInput.inputValid && handleSearchButton(searchInput.value);
  }

  function resetSearchResults() {
    searchInput.clearInput();
    handleResetSearchResults();
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleButton} noValidate>
        <fieldset className="search-form__fieldset">
          <div className="search-form__left-section">
            <div className="search-form__search-icon" />
            <input
              type="text"
              placeholder="Ключевое слово"
              className="search-form__form-item search-form__form-item_type_search"
              name="search"
              onChange={searchInput.handleInputChange}
              value={searchInput.value}
              required
            />
            <button type="submit" className="search-form__save-btn">
              Найти
            </button>
            <button
              type="button"
              className="search-form__save-btn"
              onClick={resetSearchResults}
            >
              Сброс
            </button>
          </div>
        </fieldset>
      </form>
      <div className="search-form__section-hl section-hl section-hl_type_gray" />
    </section>
  );
}

export default SearchForm;
