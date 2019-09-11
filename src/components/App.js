import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainMenu from "./main_menu/MainMenu";
import AmountOfPlayers from "./players/AmountOfPlayers";
import Cards from "./cards/Cards";
import EndOfRound from "./end_of_round/EndOfRound";
import Scores from './scores/Scores';
import { ScoreProvider, RoundProvider } from './store';

function App() {
  return (
    <Router>
      <RoundProvider>
      <ScoreProvider>
      <Switch>
        <Route path="/" exact component={MainMenu} />
        <Route path="/players/" component={AmountOfPlayers} />
        <Route path="/cards/" component={Cards} />
        <Route path="/endofround/" component={EndOfRound} />
        <Route path="/scores/" component={Scores} />
        <Redirect to="/" />
      </Switch>
      </ScoreProvider>
      </RoundProvider>
    </Router>
  );
}

export default App;
