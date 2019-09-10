import React from "react";
import { Link } from "react-router-dom";
import '../../styles/header.css'

const Header = ({ playerNum, title, newRound }) => {
  const amountOfPlayers2 = JSON.parse(localStorage.getItem("players_choice"));
 
  return (
      <div className="container">
        <header>
          <h1 className="header-menu">
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
