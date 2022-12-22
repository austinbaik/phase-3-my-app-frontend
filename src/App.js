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
        <Nav/>
        <ClickMe/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
