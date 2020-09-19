import React from 'react';
import Agregar from './Components/Agregar';
import Principal from './Components/Principal';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Principal />
      </Switch>
    </Router>
  );
}

export default App;
