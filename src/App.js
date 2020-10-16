import React from 'react';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/Projects'>
              <Header/>
              <Projects/>
          </Route>

          <Route path='/Contact'>
              <Header/>
              <Contact/>
          </Route>
          
          <Route path="/">
            <Header />
            <Home/>
          </Route>
          
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
