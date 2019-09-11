import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import { ScoreContext, RoundContext } from "../store";

const Header = ({ playerNum, title, newRound }) => {
  const amountOfPlayers2 = JSON.parse(localStorage.getItem("players_choice"));
  const [round, setRound] = useContext(RoundContext);
  // const [score, setScore] = useContext(ScoreContext);

  return (
    <div className="container">
      <header>
        <div className="header-menu">
          <h1>{`Round ${round}`}</h1>
          {title} {playerNum}
        </div>

        <h3>
          <Link to="/players/" onClick={() => localStorage.clear()}>
            New Game
          </Link>
          {round > 0 ? (
            <p>
              <Link to="/scores/">Scores</Link>
            </p>
          ) : null}
        </h3>
      </header>
    </div>
  );
};

export default Header;
