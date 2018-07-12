import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Cotacao from "./components/Cotacao";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/cotacao" component={Cotacao}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
