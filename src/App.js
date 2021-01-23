import React from 'react';
import Agregar from './Components/Inventario/Agregar';
import Inventario from './Components/Inventario';
import LogIn from "./Components/LogIn";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import PrivateRoute from "./Components/PrivateRoute"
import LandingPage from "./Components/LandingPage"

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/lp" exact component={LandingPage} />
          <Route path="/inventario" exact component={Inventario} />
          <Route path="/" exact component={LogIn} />
          <Route path="/agregar" exact component={Agregar} />
        </Switch>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
