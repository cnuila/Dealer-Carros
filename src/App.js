import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Auth';
import PrivateRoute from "./Components/PrivateRoute"
import Agregar from './Components/Inventario/Agregar';
import Ventas from './Components/Ventas'
import NuevaVenta from './Components/Ventas/NuevaVenta'
import Inventario from './Components/Inventario';
import LogIn from "./Components/LogIn";
import Home from "./Components/Home"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/home"       component={Home} />
          <PrivateRoute exact path="/inventario" component={Inventario} />
          <PrivateRoute exact path="/ventas"     component={Ventas} />
          <Route        exact path="/"           component={LogIn} />
          <PrivateRoute path="/nueva-ventas/:vin" component={NuevaVenta} />
          <PrivateRoute exact path="/agregar-carro"    component={Agregar} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
