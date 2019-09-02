import React from 'react'
import { Link } from "react-router-dom"

const Header = ({playerNum}) => {
  return (
    <div>
      <div className="container">
          <header>
              <h1>Player {playerNum}</h1>
              <h3><Link to="/players/" onClick={() => localStorage.clear()}>New Game</Link></h3>
          </header>
      </div>
    </div>
  )
}

export default Header;