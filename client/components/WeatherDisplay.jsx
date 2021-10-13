import React from 'react';
import WeatherIcon from './Weather-Display/WeatherIcon.jsx';
import Temperature from './Weather-Display/Temperature.jsx';
import WeatherDetails from './Weather-Display/WeatherDetails.jsx';
import WeeklyForecast from './Weekly-Forecast/WeeklyForecast.jsx';

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='city-weather-container'>
        <div className='weather-display-container'>
        <WeatherIcon currWeather={this.props.currWeather} />
        <Temperature
          currWeather={this.props.currWeather}
          isMetric={this.props.isMetric}
          toggleUnits={this.props.toggleUnits}
        />
        <WeatherDetails
          currWeather={this.props.currWeather}
          isMetric={this.props.isMetric} />
        </div>
        <div>
        <WeeklyForecast
          weatherForecast={this.props.weatherForecast}
          isMetric={this.props.isMetric}
          futureForecast={this.props.futureForecast}
          />
        </div>
      </div>
    )
  }
}

export default WeatherDisplay