import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Routes} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/> 
    </Switch>
    </Router>
     
    </>
  );
}

export default App;
