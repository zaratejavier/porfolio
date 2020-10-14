import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Route>
          <Home />
        </Route>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
