import React, { useState, useContext } from "react";
import Choice from "../choice/Choice";
import Header from "../header/Header";
import "../../styles/end_of_round.css";

export default props => {
  const { cardsChosen } = props.location.state;
  // const [round, setRound] = useContext(RoundContext);
  

  const renderResults = () => {
    return Object.keys(cardsChosen).map((key, value) => {
      const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
      return (
        <div key={value} className="result">
          <Choice player={playerTitle} description={cardsChosen[key]} />
        </div>
      );
    });
  };
  return (
    <div>
      <Header title="Round Over" newRound="New Round" />
      <div className="results-container">{renderResults()}</div>
    </div>
  );
};
