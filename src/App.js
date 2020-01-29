import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BacteriasList from './components/BacteriasList'
import InstrumentsList from './components/InstrumentsList'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
            <Route exact path="/bacterias" component={BacteriasList} />
            <Route exact path="/instruments" component={InstrumentsList} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
