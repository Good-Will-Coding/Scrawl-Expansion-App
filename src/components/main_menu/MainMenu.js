import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/main_menu.css'


const newGame = () => {
  return (
    <div>
      <div className="game-title">
          <h1>Scrawl Extension</h1>
      </div>
      <div className="new-game-section">
       <Link className="menu-a" to="/players/" onClick={() => localStorage.clear()}>New Game</Link>
      </div>
    </div>
  )
}

export default newGame;