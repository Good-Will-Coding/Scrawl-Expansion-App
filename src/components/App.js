import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainMenu from "./main_menu/MainMenu";
import AmountOfPlayers from "./players/AmountOfPlayers";
import Cards from "./cards/Cards";
import EndOfRound from "./end_of_round/EndOfRound";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={MainMenu} />
        <Route path="/players/" component={AmountOfPlayers} />
        <Route path="/cards/" component={Cards} />
        <Route path="/endofround/" component={EndOfRound} />
      </div>
    </Router>
  );
}

export default App;
