import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BacteriasList from './components/BacteriasList'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
            <Route exact path="/" component={BacteriasList} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
