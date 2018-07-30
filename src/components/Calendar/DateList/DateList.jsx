import React from "react";
import Slider from "react-slick";

import Api from 'api.js'
import Utils from 'utils.js'

import './DateList.css'

export default class DateList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      availableDates: null,
      selectedSlot: null,
      selectedTime: null,
      selectedDate: null,
      selectedDayName: null,
      selectedMonthName: null,
      selectedDateNumber: null,
    }
  }
  
  componentDidMount(){
    Api.getSlots()
      .then((res) => {
        this.setState({availableDates: res})
      })
      .catch((res)=>{
        console.log(res)
      })
  }

  handleTimeChange = (e) => {
    this.setState({
      selectedTime: e.target.dataset.value,
    })
    this.props.onUpdateDateTime(this.state.selectedDate, e.target.dataset.value)
  }

  handleClick = (e) => {
    const selectedDate = this.state.availableDates[e.target.dataset.index]
    const { dayName, monthName, dateNumber } = Utils.dateParser(selectedDate.date)
    this.setState({
      selectedSlot: selectedDate.slots,
      selectedDate: selectedDate.date,
      selectedDayName: dayName,
      selectedMonthName: monthName,
      selectedDateNumber: dateNumber
    })
  }



  showDate = (dateObject,index) => {
    const date = dateObject.date
    const { dayName, monthName, dateNumber } = Utils.dateParser(dateObject.date)
    
    return (
      <div 
        className={this.state.selectedDate==date ? "schedule-slot__date--selected": "schedule-slot__date"} 
        key={index} 
        data-index={index}
        onClick={this.handleClick}
      >
        <span className="schedule-slot__day">{dayName}</span>
        <div className="schedule-slot__month">{monthName} {dateNumber}</div>
      </div>
    )
  }

  showTimeNotFound = () => {
    const{selectedDayName,
      selectedMonthName,
      selectedDateNumber} = this.state
      return (<div><p> Sorry there are no available slots on  {selectedDayName}, {selectedDateNumber} {selectedMonthName}.
      </p>
      <p>
        Please select another day.
        </p></div>)
  }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    };

    const {availableDates, selectedSlot} = this.state
    return availableDates && (
      <div>
        <h4> Pick a day and time </h4>
        <div className="schedule-slot" >
        <Slider {...settings}>
         {
           availableDates && availableDates.map((dateObject, index) => {
             return this.showDate(dateObject, index) 
           })
         }
         </Slider>
         </div>
        { selectedSlot && (
          <div className="schedule__time">
          { selectedSlot.length > 0 ?
            selectedSlot.map((slot, index) => {
              return (<div key={index} className="calendar__stylist--selection schedule__time--child">
                <span className="calendar__stylist--date">
                  <label className="calendar__stylist--date">
                    <span className="calendar__stylist--image-sec">
                      {slot.start}
                    </span>
                    <input className="calendar__stylist--date" type="checkbox" checked={this.state.selectedTime==slot.start} data-value={slot.start} onChange={this.handleTimeChange}  />
                    <span className="calendar__stylist--date-target"></span>
                  </label>
                </span>
              </div>)
            }) : this.showTimeNotFound()
              
            
          }
        </div>
        ) }
        
      </div>
    );
  }
}
