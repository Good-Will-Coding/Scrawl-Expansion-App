import React from 'react'
import { Link } from 'react-router-dom';

const Scrawl = ({ cardsChosen }) => {
    console.log(cardsChosen)
  return (
    <div>
      <h1>SCRAWL!</h1>
        <Link to={{ pathname: "/endofround/", state: {cardsChosen}}}>End of Round</Link>
        
    </div>
  )
}
export default Scrawl;
