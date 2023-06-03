class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getRequestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // Получает карточки с сервера
  getAllFilms() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        ...this._headers,
      }
    })
      .then(this._getRequestResult);
  }
}

// Создание экземпляра класса Api
const moviesApi = new MoviesApi({
  baseUrl: ' https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi;
