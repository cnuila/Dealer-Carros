import React, { useState, useEffect } from 'react';
import Agregar from './Components/Inventario/Agregar';
import Inventario from './Components/Inventario';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import PrivateRoute from "./Components/PrivateRoute"
import LandingPage from "./Components/LandingPage"

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/lp" exact component={LandingPage} />
          <Route path="/" exact component={Inventario} />
=======
          <Route path="/" exact component={LandingPage} />
>>>>>>> 8dbc7a1ba7ca059efe39073df76ec70170287b22
          <Route path="/login" component={LogIn} />
          <Route path="/agregar" component={Agregar} />
        </Switch>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
