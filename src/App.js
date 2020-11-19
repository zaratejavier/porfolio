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
      <Header />
      <Home/>
    </div>
  );
}

export default App;
