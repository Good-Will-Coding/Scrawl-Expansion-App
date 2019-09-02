import React from "react";
import Header from "../header/Header";
export default props => {
  const { cardsChosen } = props.location.state;

  const renderResults = () => {
    return Object.keys(cardsChosen).map((key, value) => {
      const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
      console.log(playerTitle, cardsChosen[key]);
      return (
        <div key={value} className="result">
          <h3>{`${playerTitle} : ${cardsChosen[key]}`}</h3>
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
