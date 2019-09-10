import React, { useState } from "react";
import parse from "html-react-parser";
import "../../styles/end_of_round.css";

const styles = {
    cardStyle: {
     
            color: 'red !important'
        
    }
}

const Choice = ({ player, description }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [cardRevealed, setCardRevealed] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
    setCardRevealed(!cardRevealed);
  };
  return (
    <div className="card-choice" onClick={toggleHidden}>
      <h3>{player}</h3>
      {!cardRevealed && <h4>Reveal Card</h4>}
      {!isHidden && <p className="card-description">{parse(description)}</p>}
    </div>
  );
};

export default Choice;
