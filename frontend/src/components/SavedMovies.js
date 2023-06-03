import React from "react";
import MoviesCard from "./MoviesCard";
import Header from "./Header";
import Footer from "./Footer";
import SearchError from "./SearchError";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import NoResultsError from "./NoResultsError";

function SavedMovies({
  isNotFoundNotificationShown,
  savedMovies,
  loggedIn,
  handlePageScroll,
  handleSearchButton,
  searchResult,
  isLoading,
  isError,
  handleDeleteBtnClick,
  handleResetSearchResults,
}) {
  // --- Стейт-переменные ---
  // Хранит информацию о фильмах, которые отображаются на странице
  const [filmsForLoading, setFilmsForLoading] = React.useState([]);

  React.useEffect(() => {
    console.log(searchResult);
    let filmsForLoadingTemp = [];

    if (searchResult.length < 1) {
      if (
        isNotFoundNotificationShown.page === "/saved-movies" &&
        isNotFoundNotificationShown.state === true
      ) {
        filmsForLoadingTemp = [];
      } else {
        filmsForLoadingTemp = savedMovies;
      }
    } else if (searchResult.length > 0) {
      filmsForLoadingTemp = searchResult;
    }

    setFilmsForLoading(filmsForLoadingTemp);
  }, [searchResult, savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} handlePageScroll={handlePageScroll} />
      <SearchForm
        handleSearchButton={handleSearchButton}
        handleResetSearchResults={handleResetSearchResults}
      />
      <section className="cards content__cards">
        {isLoading ? <Preloader /> : ""}
        {isNotFoundNotificationShown.page === "/saved-movies" &&
        isNotFoundNotificationShown.state === true ? (
          <NoResultsError />
        ) : (
          ""
        )}
        {isError ? (
          <SearchError />
        ) : (
          <ul className="cards__list">
            {Array.isArray(filmsForLoading) &&
              filmsForLoading.map((result) => {
                return (
                  <MoviesCard
                    handleDeleteBtnClick={handleDeleteBtnClick}
                    result={result}
                    key={result._id}
                    levenshteinDistance={result.levenshteinDistance}
                    firstText={result.firstText}
                    secondText={result.secondText}
                  />
                );
              })}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
