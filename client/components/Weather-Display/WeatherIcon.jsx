import React from 'react';

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  this.getWeatherIcon = this.getWeatherIcon.bind(this);
  }

  getWeatherIcon(data) {
    console.log('this is weather data', data.icon)
    var icon = data.icon
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
  }

  render() {
    return (
      <div className='weather-icon-container'>
        <img className='weather-icon' src={this.getWeatherIcon(this.props.currWeather.weather[0])}/>
        <div className='weather-description'>
        {this.props.currWeather.weather[0].description}
        </div>
      </div>
    )
  }
}

export default WeatherIcon;