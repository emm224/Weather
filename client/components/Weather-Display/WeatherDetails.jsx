import React from 'react';

class WeatherDetails extends React.Component {
  constructor(props) {
    super(props)
    this.returnWindSpeed = this.returnWindSpeed.bind(this);
    this.returnFeelsLikeTemp = this.returnFeelsLikeTemp.bind(this);
  }

  returnWindSpeed(currentWindSpeed) {
    if (this.props.isMetric) {
      var km = Math.round(currentWindSpeed * 1.609344)
      return (km + ' kmph')
    } else {
      return (currentWindSpeed + ' mph')
    }
  }

  returnWindDirection(degree) {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) { return 'NE'; }
    return 'N';
  }

  returnFeelsLikeTemp(temp) {
    if (this.props.isMetric) {
      var celsius = Math.round(((temp - 32) * 5) / 9)
      return celsius
    } else {
      return temp
    }
  }


  render() {
    return (
      <div className='weather-details-container'>
        <div className='humidity-container container'>
          <p className='humidity'>Humidity: </p>
          <p className='humidity-%'>{this.props.currWeather.main.humidity}%</p>
        </div>
        <div className='wind-container container'>
          <p className='wind'>Wind: </p>
          <p className='wind-speed'>{this.returnWindSpeed(this.props.currWeather.wind.speed)}</p>
          <p className='wind-direction'>{this.returnWindDirection(this.props.currWeather.wind.deg)}</p>
        </div>
        <div className='feels-like-container container'>
          <p className='feels-like'>Feels Like:</p>
          <p className='feels-like-temp'>{this.returnFeelsLikeTemp(Math.round(this.props.currWeather.main.feels_like))}</p>
          <sup>o</sup>
        </div>
      </div>
    )
  }
}

export default WeatherDetails;