import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/scrawl.css'

const Scrawl = ({ cardsChosen }) => {
    console.log(cardsChosen)
  return (
    <div className="scrawl-menu">
      <h1>SCRAWL!</h1>
        <Link className="scrawl-link" to={{ pathname: "/endofround/", state: {cardsChosen}}}>Show Cards</Link>
    </div>
  )
}
export default Scrawl;
