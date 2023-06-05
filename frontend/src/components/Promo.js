import React from "react";
import { wagnerFischer } from "../utils/utils";

function Promo({ loggedIn, addResult }) {
  const [message1, setMessage1] = React.useState("");
  const [message2, setMessage2] = React.useState("");
  const [distance, setDistance] = React.useState(0);

  const handleMessageChange = (event) => {
    event.target.name == "first"
      ? setMessage1(event.target.value)
      : setMessage2(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDistance(wagnerFischer(message1, message2));
  }

  function saveResult() {
    addResult({
      firstText: message1,
      secondText: message2,
      levenshteinDistance: distance,
    });
  }

  return (
    <div className="content__lead-wrapper">
      <section className="lead content__lead">
        <form method="post" onSubmit={handleSubmit}>
          <div className="lead__text">
            <textarea
              className="lead__textarea"
              placeholder="Введите текст 1"
              name="first"
              value={message1}
              onChange={handleMessageChange}
            ></textarea>
            <textarea
              className="lead__textarea"
              placeholder="Введите текст 2"
              name="second"
              value={message2}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div className="lead__btn-section">
            {loggedIn && (
              <button type="button" onClick={saveResult} className="lead__link">
                Сохранить
              </button>
            )}
            <button type="submit" className="lead__link">
              Вычислить расстояние
            </button>
            <p>Вычисленное расстояние: {distance}</p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Promo;

{
  /* <form method="post" onSubmit={handleSubmit}>
<label>
  Post title: <input name="postTitle" defaultValue="Biking" />
</label>
<label>
  Edit your post:
  <textarea
    name="postContent"
    defaultValue="I really enjoyed biking yesterday!"
    rows={4}
    cols={40}
  />
</label>
<hr />
<button type="reset">Reset edits</button>
<button type="submit">Save post</button>
</form> */
}
