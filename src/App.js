import React, { useState, useEffect } from 'react';
import Agregar from './Components/Agregar';
import Principal from './Components/Principal';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import App from '../../App';
import { a } from "./firebase";
import Test from "./Components/Test";
import UploadImages from "./Components/UploadImages";



const App = () => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }


  const handleLogin = () => {
    clearErrors();
    a.signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSingUp = () => {
    clearErrors();
    a.createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    a.signOut();
  };

  const authListener = () => {
    a.onAuthStateChanged((user) => {
      if (user) {
        clearInputs("");
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };


  useEffect(() => {
    authListener();
  }, []);


  return (
    /*<div>
    {user ? (
      <Test handleLogout={handleLogout} />
    ) : (
        <LogIn 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSingUp={handleSingUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />

      )}
  </div>
  */
  <Router>
    <Switch>
      <Route path="/" exact component={Principal} />
      <Route path="/login" component={LogIn}/>
      <Route path="/agregar-carro" component={UploadImages} />
    </Switch>
  </Router>
  );
}

export default App;
