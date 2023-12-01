import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
//import Menu from '../src/components/Menu';
import Events from '../src/pages/Events';
import Tickets from '../src/pages/Tickets';
import Profile from '../src/pages/Profile';
import Info from '../src/pages/Info';
import Ticket from '../src/pages/Ticket';
import Details from '../src/pages/Details';
import Buying from '../src/pages/Buying';
import Login from '../src/pages/Login';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Header from './components/header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('userId'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <Header />}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Events /> : <Redirect to="/login" />}
        </Route>
        <Route path="/jegyeim">
          {isLoggedIn ? <Tickets /> : <Redirect to="/login" />}
        </Route>
        <Route path="/profil">
          {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/információk">
          {isLoggedIn ? <Info /> : <Redirect to="/login" />}
        </Route>
        <Route path="/kapcsolat">
          {isLoggedIn ? <Contact onLogin={handleLogin} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/ticket">
          {isLoggedIn ? <Ticket /> : <Redirect to="/login" />}
        </Route>
        <Route path="/details">
          {isLoggedIn ? <Details /> : <Redirect to="/login" />}
        </Route>
        <Route path="/buying">
          {isLoggedIn ? <Buying /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
