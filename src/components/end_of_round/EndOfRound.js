import React from "react";
import Header from "../header/Header";
import '../../styles/end_of_round.css'
export default props => {
  const { cardsChosen } = props.location.state;

  const renderResults = () => {
    return Object.keys(cardsChosen).map((key, value) => {
      const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
      return (
        <div key={value} className="result">
          <h3>{`${playerTitle}: ${cardsChosen[key]}`}</h3>
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
