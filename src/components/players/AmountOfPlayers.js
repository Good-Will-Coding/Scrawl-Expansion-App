import React, { useState } from "react";
import { Link } from "react-router-dom";

const AmountOfPlayers = () => {
  const [amountOfPlayers, setAmountOfPlayers] = useState("");
  const [playBtn, setPlayBtn] = useState(false);

  const resetPlayerAmountsAndBtn = () => {
    setAmountOfPlayers("");
    setPlayBtn(false);
  };
  const handleChange = e => {
    resetPlayerAmountsAndBtn();
    setAmountOfPlayers(e.target.value);
    if (e.target.value < 4 || e.target.value > 8) {
      console.log("Error");
    } else {
      setPlayBtn(!playBtn);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="main-section">
          <h1>Enter amount of players</h1>
          <h5>Welcome! Please enter amount of players between 4 and 8.</h5>
        </div>
        <div className="input-section">
          <input type="text" value={amountOfPlayers} onChange={handleChange} />
        </div>
        {playBtn ? (
          <Link
            to={{ pathname: "/cards", state: { players: { amountOfPlayers } } }}
          >
            PLAY
          </Link>
        ) : null }
      </div>
    </div>
  );
};

export default AmountOfPlayers;
