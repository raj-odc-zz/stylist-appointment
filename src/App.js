import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';

import Home from './components/Home'

import Layout from './components/Layout';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Layout} />
    </div>
  </Router>
)

export default App;
