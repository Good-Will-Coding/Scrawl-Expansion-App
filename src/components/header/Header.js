import React from "react";
import { Link } from "react-router-dom";

const Header = ({ playerNum, title, newRound }) => {
  const amountOfPlayers2 = JSON.parse(localStorage.getItem("players_choice"));
 
 if(!amountOfPlayers2 == null) {
  console.log(Object.keys(amountOfPlayers2).length)

 }
  return (
      <div className="container">
        <header>
          <h1>
            {title} {playerNum}
          </h1>
          <h3>
            <Link to="/players/" onClick={() => localStorage.clear()}>
              New Game
            </Link>
          </h3>
          <h2>
            <Link to={{
                pathname: "/cards",
                state: { players: { amountOfPlayers2 } }
              }}>{newRound}</Link>
          </h2>
        </header>
      </div>
  );
};

export default Header;
