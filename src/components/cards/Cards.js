import React, { useState } from "react";
import cardData from "../../data/scrawl_data";
import Header from "../header/Header";

const Cards = props => {
  const { amountOfPlayers } = props.location.state.players;
  let totalPlayers = {};
  const newArr = [];

  const [playerChoice, setPlayerChoice] = useState({});
  const [playerNum, setPlayerNum] = useState(1);

  const createPlayers = () => {
    for (let i = 1; i <= amountOfPlayers; i++) {
      if (!(`player${i}` in totalPlayers)) {
        totalPlayers[`player${i}`] = "";
      }
    }
  };

  const pickRandomCards = () => {
    const b = cardData.slice();

    for (let i = 0; i < 4; i++) {
      let arr = b[Math.floor(Math.random() * b.length)];

      let index = b.indexOf(arr);

      b.splice(index, 1);

      newArr.push(arr);
    }

    return newArr;
  };

  const playerChoosesCard = () => {
    if (`totalPlayers.player${playerNum} === ""`) {
    }
  };

  const renderPlayerChoices = () => {
    createPlayers();
    playerChoosesCard();

    return pickRandomCards().map((item, index) => {
      console.log(item);
      return (
        <div className="card" key={index}>
          {item}
        </div>
      );
    });
  };

  return (
    <div className="game-container">
      <Header playerNum={playerNum} />
      <div className="cards-container">
        <div>{renderPlayerChoices()}</div>
      </div>
    </div>
  );
};

export default Cards;
