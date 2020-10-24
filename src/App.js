import React, { useState, useEffect } from 'react';
import Agregar from './Components/Agregar';
import Principal from './Components/Principal';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import PrivateRoute from "./Components/PrivateRoute"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/Principal" exact component={Principal} />
          <Route path="/login" component={LogIn} />
          <Route path="/" component={Agregar} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
