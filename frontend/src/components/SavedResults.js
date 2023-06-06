import React from "react";
import ResultCard from "./ResultCard";
import Header from "./Header";
import Footer from "./Footer";
import SearchError from "./SearchError";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import NoResultsError from "./NoResultsError";

function SavedResults({
  isNotFoundNotificationShown,
  savedResults,
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
        isNotFoundNotificationShown.page === "/saved-results" &&
        isNotFoundNotificationShown.state === true
      ) {
        filmsForLoadingTemp = [];
      } else {
        filmsForLoadingTemp = savedResults;
      }
    } else if (searchResult.length > 0) {
      filmsForLoadingTemp = searchResult;
    }

    setFilmsForLoading(filmsForLoadingTemp);
  }, [searchResult, savedResults]);

  return (
    <>
      <Header loggedIn={loggedIn} handlePageScroll={handlePageScroll} />
      <SearchForm
        handleSearchButton={handleSearchButton}
        handleResetSearchResults={handleResetSearchResults}
      />
      <section className="cards content__cards">
        {isLoading ? <Preloader /> : ""}
        {isNotFoundNotificationShown.page === "/saved-results" &&
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
                  <ResultCard
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

export default SavedResults;
