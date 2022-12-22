import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Brands from '/Brands.js'

import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {


  
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Brands">
            <Brands />
          </Route>
          {/* <Route path="/brand[:id]">
            <Favorites />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
