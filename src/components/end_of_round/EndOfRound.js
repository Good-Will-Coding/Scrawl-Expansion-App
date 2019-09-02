import React from "react";

export default props => {
  const { cardsChosen } = props.location.state;

  const renderResults = () => {
    // return Object.keys(cardsChosen).map((items, index) => {
    //   return (
         

    //   );
    // });
  };
  return (
    <div>
      <div className="results-container">{renderResults()}</div>
    </div>
  );
};
