import React, { useState, useContext } from "react";
import Choice from "../choice/Choice";
import Header from "../header/Header";
import "../../styles/end_of_round.css";
import { Link } from "react-router-dom";

import { ScoreContext, RoundContext } from "../store";
import { FaThumbsUp } from "react-icons/fa"
const amountOfPlayersForNextRounds = JSON.parse(localStorage.getItem("players_choice"));


export default props => {
  const { cardsChosen } = props.location.state;
  const [score, setScore] = useContext(ScoreContext);
  const [round, setRound] = useContext(RoundContext);

  const [voteBtn, setVoteBtn] = useState(false);


  const handleScoreChange = player => {
    setScore(prev => ({
      ...prev,
      ...prev[`${player}`]++ 
    }));
    setRound(prevStat => prevStat + 1)

  }


  const renderResults = () => {
    return Object.keys(cardsChosen).map((key, value) => {
      const playerTitle = key.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2");
      return (
        <div key={value} className="result">
          <Link onClick={() => handleScoreChange(key)} to={{
              pathname: "/cards",
              state: { players: { amountOfPlayersForNextRounds } }
            }} ><div className="icon"><FaThumbsUp /></div></Link>
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
