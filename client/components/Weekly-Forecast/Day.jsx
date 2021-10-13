import React from 'react';
import WeatherIcon from '../Weather-Display/WeatherIcon.jsx';

class Day extends React.Component {
  constructor(props) {
    super(props)
  }

  getDayOfWeek(unixDate) {
    var days = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']
    var day = new Date(unixDate * 1000).getDay()
    return days[day]
  }

  render() {
    return (
      <div className='day-component'>
        <div className='day-of-week'>
          {this.getDayOfWeek(this.props.day.dt)}
        </div>
        <WeatherIcon currWeather={this.props.day} />
        <div className='hi-lo-temp'>
          <p className='hi-temp'>
            <sup>o</sup>
          </p>
          <p className='lo-temp'>
            <sup>o</sup>
          </p>
        </div>
        <div className='sunrise-sunset'>
          <div className='sunrise-summary'>
            <div className='sunrise-icon'></div>
            <div className='sunrise-time'></div>
          </div>
          <div className='sunset-summary'>
            <div className='sunset-icon'></div>
            <div className='sunset-time'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Day;