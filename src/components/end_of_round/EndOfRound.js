import React, { useState } from "react";
import parse from "html-react-parser";

import Choice from '../choice/Choice';
import Header from "../header/Header";
import "../../styles/end_of_round.css";
export default props => {
  const { cardsChosen } = props.location.state;
  const [revealed, setRevealed] = useState(false);

  const renderResults = () => {
    return Object.keys(cardsChosen).map((key, value) => {
      const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
      return (
        <div key={value} className="result">
          <Choice player={playerTitle} description={cardsChosen[key]} />
          {/* <h3>
            {`${playerTitle}:`}
            <p className="card-description">{`${cardsChosen[key]}`}</p>
          </h3> */}
        </div>
      );
    });
  };
  return (
    <div>
      <Header title="Round Over" />
      <div className="results-container">{renderResults()}</div>
    </div>
  );
};
