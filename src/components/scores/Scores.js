import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../store";
import Header from "../header/Header";
import '../../styles/scores.css'

const Scores = props => {
  const [score, setScore] = useContext(ScoreContext);
 const { scoreBoard } = props.location.state;

  const renderScoreBoard = () => {
    console.log(score)
    if(score) {
      return Object.keys(score).map((key) => {
        const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
        return (
          <div key={key} className="score-board">
            <div className="scores">
              <h1>{playerTitle}</h1>
              <p>{score[key]}</p>
            </div>
          </div>
        );
      });
    }
   
  };

  console.log(score);
  return (
    <div>
      <Header />
      {renderScoreBoard()}
    </div>
  );
};

export default Scores;
