import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Customer from './components/pages/Customer';
import Projects from './components/pages/Projects';
import Ourteam from './components/pages/Ourteam';
import Companies from './components/pages/Companies';
import People from './components/pages/People';
import Create from './components/pages/Create';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/customer' component={Customer} />
        <Route path='/projects' component={Projects} />
        <Route path='/ourteam' component={Ourteam} />
        <Route path='/create' component={Create} />
        <Route path='/companies' component={Companies} />
        <Route path='/people' component={People} />
      </Switch>
    </Router>
  );
}

export default App;
