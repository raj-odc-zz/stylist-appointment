import React from 'react';
import Stylist from './../../images/calendar/Stylist.png'
import Wallet from './../../images/success/icon-wallet.svg'
import House from './../../images/success/icon-house.svg'
import Money from './../../images/success/icon-Money.svg'
import Pick from './../../images/success/icon-pick.svg'

import './Success.css'

export default class Success extends React.Component {
  constructor(props) {
    super(props);
  }

  getDate = () => {
    const date = localStorage.getItem('selectedDate');
    if(!date)
      return "31.10.2016"
    const parsedDate = new Date(date)
    var dd = parsedDate.getDate();
    var mm = parsedDate.getMonth()+1; 
    var yyyy = parsedDate.getFullYear();
    return `${dd}.${mm}.${yyyy}`
  }
  getTime = () => {
    const time = localStorage.getItem('selectedTime');
    if(!time)
      return "11h45"
    return time.split(":").join("h");
  }

  getStylist = () => {
    return localStorage.getItem('stylistName');
  }

  render() {
    return (
      <div className="success">
        <div className="success__head--pic">
          <img
              src={ Stylist }
              alt="No orders shopping bag"
              className="success__stylist--pic"
          />
        </div>
        <p>
          Thank you very much! You have a call booked with {this.getStylist()} on the {this.getDate()} at {this.getTime()}
        </p>
        <div className="success__order-details">
          <p>Your order details</p>
          <div className="success__order-details__parent">
            <div className="order-details__child--pic">
              <img
                src={ Wallet }
                alt="No orders shopping bag"
                className=""
              />  
            </div>
            <div className="order-details__child--text">
              <p>Payment Method Mastercard: </p>
              <span className="order-details__child--subtext">
              **** **** **** 8976
              </span>
            </div>
          </div>
          <div className="success__order-details__parent">
            <div className="order-details__child--pic">
              <img
                src={ House }
                alt="House"
                className=""
              />  
            </div>
            <div className="order-details__child--text">
              <p>Delivery Address: </p>
              <span className="order-details__child--subtext">
                Josh Homme c/o Miller
                Gorlitzer str 55
                10997 Berlin, Germany
              </span>
            </div>
          </div>
          <div className="success__order-details__parent">
            <div className="order-details__child--pic">
              <img
                src={ Money }
                alt="Money"
                className=""
              />  
            </div>
            <div className="order-details__child--text">
              <p>Billing Address: </p>
              <span className="order-details__child--subtext">
                Josh Homme c/o Miller
                Gorlitzer str 55
                10997 Berlin, Germany
              </span>
            </div>
          </div>
          <div className="success__order-details__parent">
            <div className="order-details__child--pic">
              <img
                src={ Pick }
                alt="Pick"
                className=""
              />  
            </div>
            <div className="order-details__child--text">
              <p>Add call date to calender </p>
              <span className="order-details__child--subtext">
                + Google Calendar
              </span>
              <span className="order-details__child--subtext">
                + Oulook
              </span>
              <span className="order-details__child--subtext">
                + Apple iCal
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}