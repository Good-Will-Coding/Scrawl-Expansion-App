import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/amount_of_players.css";

const AmountOfPlayers = () => {
  const [amountOfPlayers, setAmountOfPlayers] = useState("");
  const [playBtn, setPlayBtn] = useState(false);
  const [error, setError] = useState(false);

  const resetPlayerAmountsAndBtn = () => {
    setAmountOfPlayers("");
    setPlayBtn(false);
  };
  const handleChange = e => {
    resetPlayerAmountsAndBtn();
    setAmountOfPlayers(e.target.value);
    const regex = /^[0-9]+$/;
    if (e.target.value > 8 || !e.target.value.match(regex)) {
      console.log("Error");
      setError(!error);
    } else {
      setPlayBtn(!playBtn);
      setError(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="main-section">
          <h1>Please enter the amount of players for this game.</h1>
          <h5>Welcome! Scrawl recommends 4 to 8 players.</h5>
        </div>
        <div className="input-section">
          <input type="text" value={amountOfPlayers} onChange={handleChange} />
        </div>
        {playBtn ? (
          <div className="players-link-container">
            <Link
              className="players_link menu-a"
              to={{
                pathname: "/cards",
                state: { players: { amountOfPlayers } }
              }}
            >
              Pick Your Cards!
            </Link>
          </div>
        ) : null}
        {error ? (
          <div className="error">
            <p>Please enter a number between 1 and 8.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AmountOfPlayers;
