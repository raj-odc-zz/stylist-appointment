import React, { Component } from 'react';

import './ProgressBar.css'

export default class ProgressBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      strokeOffset: '104.402px',
      strokeArray: '100px',
    }
  }

  componentWillReceiveProps(nextProps){
    (nextProps.progressComplete==="success") ? 
    this.setProgressAsComplete() : this.setProgressAsInProgress()
  }

  componentDidMount(){
    (this.props.progressComplete==="success") ? 
    this.setProgressAsComplete() : this.setProgressAsInProgress()
  }

  setProgressAsComplete = () => {
    this.setState({
      strokeOffset: '0',
      strokeArray: '0',
    })
  }

  setProgressAsInProgress = () => {
    this.setState({
      strokeOffset: '104.402px',
      strokeArray: '100px',
    })
  }

  render() {
    const {strokeOffset, strokeArray} = this.state;
    return (
      <div>
        <div className="progress-icon">
          <div className="progress-icon__content progress-bar-line-empty">
            <div>
              <span className="progress-icon__content-icon icon-light-tshirt">
              </span>
              <svg version="1.1" baseProfile="full" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" fill="none" stroke="#2880A3" strokeWidth="2" r="20"></circle>
              </svg>
            </div>
          </div>
          <div className="progress-icon__content progress-bar-line-empty">
            <div>
              <span className="progress-icon__content-icon icon-light-customer">
              </span>
              <svg version="1.1" baseProfile="full" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" fill="none" stroke="#2880A3" strokeWidth="2" r="20"></circle>
              </svg>
            </div>
          </div>
          <div className="progress-icon__split">
          </div>
          <div className="progress-icon__content">
            <div>
              <span className="progress-icon__content-icon icon-light-box-plain">
              </span>
              <svg version="1.1" baseProfile="full" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" fill="none" stroke="#cdcccc" strokeWidth="2" r="20" ></circle>
                <circle cx="40" cy="40" fill="none" stroke="#2880A3" strokeWidth="2" r="20" strokeDashoffset= {strokeOffset} strokeDasharray= {strokeArray} ></circle> 
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}