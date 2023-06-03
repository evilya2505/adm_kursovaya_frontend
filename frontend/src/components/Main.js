import React from "react";
import Promo from "./Promo";

function Main(props) {
  return (
    <main className="content page__content">
      <Promo loggedIn={props.loggedIn} addResult={props.addResult} />
    </main>
  );
}

export default Main;
