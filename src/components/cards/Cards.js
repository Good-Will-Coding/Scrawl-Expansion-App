import React, { useState } from "react";
import parse from "html-react-parser";
import cardData from "../../data/scrawl_data";
import Header from "../header/Header";
import Scrawl from "../scrawl/Scrawl";
import AmountOfPlayers from "../players/AmountOfPlayers";
import "../../styles/cards.css";

const Cards = props => {
  const amountOfPlayers = props.location.state.players.amountOfPlayers || JSON.parse(localStorage.getItem("num_of_players")) ;
  let totalPlayers = JSON.parse(localStorage.getItem("players_choice")) || {};
  const newArr = [];
  // const [playerChoice, setPlayerChoice] = useState({});
  const [playerNum, setPlayerNum] = useState(1);
  const [allCardsChosen, setAllCardsChosen] = useState(false);

  const createPlayers = () => {
    if (playerNum < 1) {
      for (let i = 1; i <= amountOfPlayers; i++) {
        if (!(`player${i}` in totalPlayers)) {
          totalPlayers[`player${i}`] = "";
        }
      }
    }
  };

  const pickRandomCards = () => {
    const cards =
      JSON.parse(localStorage.getItem("cardsWithRemoved")) || cardData;

    const b = cards.slice();

    for (let i = 0; i < 4; i++) {
      let arr = b[Math.floor(Math.random() * b.length)];
      let index = b.indexOf(arr);
      b.splice(index, 1);
      newArr.push(arr);
    }
    localStorage.setItem("cardsWithRemoved", JSON.stringify(b));
    return newArr;
  };

  const allPlayersHaveChosen = () => {
    setAllCardsChosen(!allCardsChosen);
  };
  const playerChoosesCard = card => {
    if (playerNum <= amountOfPlayers) {
      if (`totalPlayers.player${playerNum} === ""`) {
        totalPlayers[`player${playerNum}`] = `${card}`;
        localStorage.setItem("players_choice", JSON.stringify(totalPlayers));
      }
    }

    if (playerNum >= amountOfPlayers) {
      allPlayersHaveChosen();
    }

    setPlayerNum(playerNum + 1);
  };

  const renderPlayerChoices = () => {
    createPlayers();
    localStorage.setItem("num_of_players", JSON.stringify(amountOfPlayers));
    return pickRandomCards().map((item, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-item" onClick={() => playerChoosesCard(item)}>
            {parse(item)}
          </div>
        </div>
      );
    });
  };

  return !allCardsChosen ? (
    <div className="game-container">
      <Header title="Player" playerNum={playerNum} />
      <div className="cards-container">
        <div>{renderPlayerChoices()}</div>
      </div>
    </div>
  ) : (
    <Scrawl cardsChosen={totalPlayers} />
  );
};

export default Cards;
