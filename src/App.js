import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BacteriasList from './components/BacteriasList';
import InstrumentsList from './components/InstrumentsList';
import TeamsList from './components/TeamsList';
import BacteriaView from './BacteriaView';
import ProfileChanger from './components/ProfileChanger';
import Nav from './components/Nav';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={BacteriaView} />
          <Route exact path="/bacterias" component={BacteriasList} />
          <Route exact path="/instruments" component={InstrumentsList} />
          <Route exact path="/teams" component={TeamsList} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
