import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Events from './pages/Events';
import Tickets from './pages/Tickets';
import Profile from './pages/Profile';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Ticket from './pages/Ticket'; // Import the Ticket component
import Details from './pages/Details';
import Buying from './pages/Buying';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProtectedRoute from './components/ProtectedRoute';

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
        <ProtectedRoute path="/jegyeim" component={Tickets} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/profil" component={Profile} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/információk" component={Info} isLoggedIn={isLoggedIn} />
        <ProtectedRoute
          path="/kapcsolat"
          component={() => <Contact onLogin={handleLogin} />}
          isLoggedIn={isLoggedIn}
        />
        <ProtectedRoute path="/details/:id" component={Details} isLoggedIn={isLoggedIn} />
        <ProtectedRoute path="/ticket/:id" component={Ticket} isLoggedIn={isLoggedIn} /> {/* Update the path */}
        <ProtectedRoute path="/buying" component={Buying} isLoggedIn={isLoggedIn} />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
