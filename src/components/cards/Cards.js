import React, { useState } from "react";
import cardData from "../../data/scrawl_data";
import Header from "../header/Header";
import Scrawl from '../scrawl/Scrawl';

const Cards = props => {
  const { amountOfPlayers } = props.location.state.players;
  let totalPlayers = {};
  const newArr = [];
  const [playerChoice, setPlayerChoice] = useState({});
  const [playerNum, setPlayerNum] = useState(1);
  const [allCardsChosen, setAllCardsChosen] = useState(false);

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

  const allPlayersHaveChosen = () => {
    setAllCardsChosen(!allCardsChosen);
  }
  const playerChoosesCard = card => {
    const totalPlayersLength = Object.keys(totalPlayers).length;
    if(playerNum < totalPlayersLength) {
      if (`totalPlayers.player${playerNum} === ""`) {
        let choice = totalPlayers[`player${playerNum}`] = `${card}`;
        setPlayerNum(playerNum + 1)
        console.log(totalPlayers)
      }
    } else {
      allPlayersHaveChosen();
    }
    
  };

  const renderPlayerChoices = () => {
    createPlayers();
    return pickRandomCards().map((item, index) => {
      return (
        <div className="card" key={index}>
          <div
            className="card-item"
            onClick={() => playerChoosesCard(item)}
          >
            {item}
          </div>
        </div>
      );
    });
  };

  return (
    !allCardsChosen ?
    <div className="game-container">
      <Header playerNum={playerNum} />
      <div className="cards-container">
        <div>{renderPlayerChoices()}</div>
      </div>
    </div>
    : <Scrawl cardsChosen={playerChoice} />
  );
};

export default Cards;
