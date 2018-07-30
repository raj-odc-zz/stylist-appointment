import React, { Component } from 'react';

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-main">
          <p className="home-main__title">
            Your Personal Stylist
          </p>
          <h2 className="home-main__content" >
            Too busy to worry about clothes shopping?
          </h2> 
          <p className="home-main__subtitle" >
            Let our stylists shop for you
          </p> 
          <div>
            <div className="">
              <a target="_self" href="/calendar" className="uppercase btn btn-primary">
                Get started
              </a> 
            </div> 
          </div>
          <div className="home-main__arrowIcon" offset="60">
          </div> 
        </div>
    );
  }
}