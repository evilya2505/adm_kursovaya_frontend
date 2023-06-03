function sortFilms(keyWord, films) {
  // Хранит данные подходящие под запрос пользователя
  // let matchedFilmsEN = [];
  let matchedFilmsRU = [];
  let res = [];

  keyWord = keyWord.trim();

  if (keyWord !== "") {
    films.forEach((film) => {
      // Если строка подходит под запрос, то добавляет автора в массив matchedFilmsRU
      isCointainValue(film.firstText, keyWord) && matchedFilmsRU.push(film);
      isCointainValue(film.secondText, keyWord) && matchedFilmsRU.push(film);
    });

    // ? Сортировка по английскому названию
    // films.forEach(film => {
    //   // Если строка подходит под запрос, то добавляет автора в массив matchedFilmsEN
    //   (isCointainValue(film.nameEN, keyWord) && matchedFilmsEN.push(film));
    // });

    // Убирает одинаковые фильмы
    res = matchedFilmsRU.reduce((stack, item) => {
      if (!stack[0]) {
        stack.push(item);
      } else {
        let isContain = [];
        for (let i = 0; i < stack.length; i++) {
          stack[i].id === item.id
            ? isContain.push(false)
            : isContain.push(true);
        }

        !isContain.includes(false) && stack.push(item);
      }

      return stack;
    }, []);
  }

  return res;
}

// Удаляет из строки все, кроме букв и цифр, заменяя на пробел -> убирает двойные пробелы -> заменяет ё на е -> обрезает пробелы из начала и конца строки
function replacer(str) {
  if (str) {
    return str
      .replace(/[^a-zа-яё0-9\s]/gi, "")
      .replace(/\s+/g, " ")
      .replace(/ё/g, "е")
      .trim();
  } else {
    return "";
  }
}

// Функция проверяет, содержит ли строка слова из запроса пользователя
function isCointainValue(dataStr, inputValue) {
  inputValue = replacer(inputValue);
  dataStr = replacer(dataStr);

  if (inputValue !== "") {
    // Разбивает строку на массив строк
    let inputValueArr = inputValue.split(" ");
    let dataStrArr = dataStr.split(" ");

    // -- Переменная, которая понадобится при использовании метода reduce --
    // Количество совпадений
    let amountOfMatches = 0;

    //  Проходится по каждому слову в запросе пользователя, вернет значение false или true, в зависимости от того, сколько совпадений найдется
    return inputValueArr.reduce((isMatch, inputWord) => {
      dataStrArr.forEach((strWord) => {
        // Если нашлось совпадение, то прибавляет к количеству совпадений 1
        if (strWord.toLowerCase().indexOf(inputWord.toLowerCase()) === 0) {
          amountOfMatches += 1;
          // Если количество совпадений, равняется или больше количеству слов в запросе пользователя, значит строка подходит под запрос
          amountOfMatches >= inputValueArr.length && (isMatch = true);
        }
      });
      return isMatch;
    }, false);
  }
}

function returnShortFilmsOnly(arr) {
  let res = [];

  arr.forEach((item) => {
    item.duration <= 40 && res.push(item);
  });

  return res;
}

function wagnerFischer(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    throw new Error("Pass two strings!");

  var distances = [];

  for (var i = 0; i <= str1.length; ++i) distances[i] = [i];
  for (var i = 0; i <= str2.length; ++i) distances[0][i] = i;

  for (var j = 1; j <= str2.length; ++j)
    for (var i = 1; i <= str1.length; ++i)
      distances[i][j] =
        str1[i - 1] === str2[j - 1] // if the characters are equal
          ? distances[i - 1][j - 1] // no operation needed
          : // else
            Math.min.apply(Math, [
              // take the minimum between
              distances[i - 1][j] + 1, // a  deletion
              distances[i][j - 1] + 1, // an insertion
              distances[i - 1][j - 1] + 1, // a  substitution
            ]);

  return distances[str1.length][str2.length];
}

export { sortFilms, returnShortFilmsOnly, wagnerFischer };
