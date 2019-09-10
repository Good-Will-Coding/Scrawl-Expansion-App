import React, { useState } from "react";

const Choice = ({ player, description }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [cardRevealed, setCardRevealed] = useState(false);

  console.log(player);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
    setCardRevealed(!cardRevealed);
  };
  return (
    <>
      <h3>{player}</h3>
      {!cardRevealed && <h4 onClick={toggleHidden}>Reveal Card</h4>}
      {!isHidden && <p>{description}</p>}
    </>
  );
};

export default Choice;
