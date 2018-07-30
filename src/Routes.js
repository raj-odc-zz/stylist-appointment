import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Success from './components/Success';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Home/>
  </div>
)

export default App;

<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Header />
      <main>
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/success" component={Success} />
      </main>
      <Footer />
    </div>
  </Router>