import React from 'react'
import cardData from '../../data/scrawl_data';

const Cards = props => {
    const cards = cardData;
    const { amountOfPlayers } = props.location.state.players;
    let totalPlayers = {};

    const createPlayers = () => {
        for(let i = 1; i <= amountOfPlayers; i++) {
            totalPlayers[`player${i}`] = "";
        }
        console.log(totalPlayers)
    }
    const renderPlayerChoices = () => {
        createPlayers();
        if(totalPlayers.length) {
            totalPlayers.map(player => {
                console.log(player)
            })
        }
    }
  return (
    <div>
        {renderPlayerChoices()}
    </div>
  )
}

export default Cards;
