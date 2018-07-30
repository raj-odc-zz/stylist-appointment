import React, { Component } from 'react';

import Calendar from '../Calendar/CalendarForm'
import Success from '../Success'
import Header from '../Header';
import Footer from '../Footer';

import NotFound from '../NotFound';

import Utils from 'utils.js';

const Layout = ({ match }) => (
  <div>
  (<Header progressComplete={match.params.id}/>
      {match.params.id === 'success' ? 
        <Success/> : match.params.id === 'calendar' ? 
        <Calendar/> : <NotFound />
      }
    <Footer/>)

  </div>
)

export default Layout;