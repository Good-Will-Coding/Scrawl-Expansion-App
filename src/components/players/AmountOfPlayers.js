import React, { useState } from "react";
import { Link } from "react-router-dom";

const AmountOfPlayers = () => {
  const [amountOfPlayers, setAmountOfPlayers] = useState("");

  const handleChange = e => {
    setAmountOfPlayers(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="main-section">
          <h1>Enter amount of players</h1>
          <h5>4-8 Players Recommended</h5>
        </div>
        <div className="input-section">
          <input type="text" value={amountOfPlayers} onChange={handleChange} />
        </div>
        <Link to={{ pathname: '/cards', state: { players: {amountOfPlayers}} }}>PLAY</Link>
      </div>
    </div>
  );
};

export default AmountOfPlayers;
