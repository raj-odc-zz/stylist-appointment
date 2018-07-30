import React, { Component } from 'react';
import Stylist from '../../../images/calendar/Stylist.png'
import CalendarIcon from '../../../images/calendar/calendar-icon.svg'

import './CalendarForm.css'
import DateList from '../DateList';
import Api from 'api.js'

import { Redirect } from 'react-router-dom';

export default class CalendarForm extends Component {
  constructor (props){
    super(props)
    this.state = {
      isStylistRequired: false,
      contactNumber: null,
      selectedDate: null,
      selectedTime: null,
      comments: null,
      confirmOrder: false,
      redirect: false,
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  handleChange = () => {
    this.setState({isStylistRequired: !this.state.isStylistRequired})
  }

  handleDateTime = (date, time) => {
    this.setState({
      selectedDate: date,
      selectedTime: time,
      confirmOrder: true,
    })
  }

  handleSubmit = (e) => {
    const {selectedDate, selectedTime, contactNumber, comments, confirmOrder, isStylistRequired} = this.state
    if(!confirmOrder || (!contactNumber && isStylistRequired)){
      alert("Please check you have enter the values")
      return false
    }

    const params = {
      date: selectedDate || '2018-07-31', 
      slot: selectedTime || '10:15', 
      orderConfirmationComment: comments, 
      phone: contactNumber || '1234567890',
    }
    Api.createAppointment(params).then((res) => {
      if(res.stylist){
        localStorage.setItem('selectedDate', res.date);
        localStorage.setItem('selectedTime', res.slot);
        localStorage.setItem('stylistName', res.stylist);
      }
      this.setState({
        redirect: true
      })
    })
  }

  handleMobileNumber = (e) => {
    this.setState({
      contactNumber: "+49"+ e.target.value
    })
  }

  handleComments = (e) => {
    if(e.target.value){
      this.setState({
        comments: e.target.value,
        confirmOrder: true,
      })
    }
    
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push={ true } to={ '/success' } />
    }
  }

  render() {
    const { isStylistRequired, confirmOrder } = this.state
    return (
      <div className="calendar">
        <div className="calendar__stylist--option">
        <div className="calendar__stylist--picture">
          <img
            src={ Stylist }
            alt="No orders shopping bag"
            className="calendar__stylist--pic"
          />
        </div>
          <div className="calendar__stylist--schedule">
            <p>Would you like to schedule a call with your stylist before they pack your box?</p>
            <div className="calendar__stylist--selection">
              <span className="calendar__stylist--date">
                <label className="calendar__stylist--date">
                  <span className="calendar__stylist--image-sec">
                    <img
                      src={ CalendarIcon }
                      alt="No orders shopping bag"
                      className="calendar__stylist--pic"
                    />
                    Yes, Please
                  </span>
                  <input className="calendar__stylist--date date-selection" onChange={this.handleChange} type="checkbox" checked={isStylistRequired} />
                  <span className="calendar__stylist--date-target"></span>
                </label>
              </span> 
            </div>
          </div>
        </div>

        {
          isStylistRequired && [<div key="0" className="calendar__contact--details">
          <p>Schedule a call with your stylist at a time to suit you, to talk about your order, style and preferences.</p>
          <div className="calendar__contact--number">
            <p>Contact telephone number </p>
            <input className="form-control" readOnly name="telephone_code" value= "Germany(+49)"/>
            <input className="form-control" type="text" name="telephone_number" onChange={this.handleMobileNumber} />
          </div>
        </div>,
        <DateList key='1' onUpdateDateTime= {this.handleDateTime} />]
      }

        <div className="calendar__contact--details">
          <p>Schedule a call with your stylist at a time to suit you, to talk about your order, style and preferences.</p>
          <div className="calendar__contact--number">
            <textarea rows="6" className="form-control calendar__contact--comments" name="comments" onChange={this.handleComments} />
          </div>
        </div>
        <div className="mt visible-xs col-xs-2">
                        <a className="btn btn-white-primary prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                    </div>
        <div add-class-if-element-is-visible="fixed" className="">
          {this.renderRedirect()}
          <button onClick={this.handleSubmit} className={confirmOrder ? "uppercase btn btn-primary" : "uppercase btn btn-gray-primary"}>
            Confirm Order
          </button>
            </div> 
      </div>
    );
  }
}