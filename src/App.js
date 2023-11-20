import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Menu from '../src/components/Menu';
import Events from '../src/pages/Events';
import Tickets from '../src/pages/Tickets';
import Profile from '../src/pages/Profile';
import Info from '../src/pages/Info';
import Contact from '../src/pages/Contact';
import Ticket from '../src/pages/Ticket';
import Details from '../src/pages/Details';
import Buying from '../src/pages/Buying';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/események" component={Events} />
        <Route path="/jegyeim" component={Tickets} />
        <Route path="/profil" component={Profile} />
        <Route path="/információk" component={Info} />
        <Route path="/kapcsolat" component={Contact} />
        <Route path="/ticket" component={Ticket} />
        <Route path="/details" component={Details} />
        <Route path="/buying" component={Buying} />
      </Switch>
    </Router>
  );
}

export default App;
