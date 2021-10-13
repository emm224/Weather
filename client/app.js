import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import axios from 'axios'
import WeatherDisplay from './components/WeatherDisplay.jsx';
// import WeeklyForecast from './components/Weekly-Forecast/WeeklyForecast.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: '',
      currWeather: '',
      weatherForecast: '',
      isMetric: false,
      searchTerm: ''
    }
    this.searchCity = this.searchCity.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.confirmValidCity = this.confirmValidCity.bind(this);
    this.toggleUnits = this.toggleUnits.bind(this);
    this.futureForecast = this.futureForecast.bind(this);
  }

  confirmValidCity() {
    console.log('this is curr weather', this.state.currWeather)
    if (this.state.currWeather !== undefined && this.state.currWeather !== '') {
      return true
    }
  }

  searchCity (event) {
    this.setState({
      searchTerm: event.target.value
    })

  }

  // update with second api later
  searchSubmit (event) {
    event.preventDefault()

    this.setState({
      currentCity: this.state.searchTerm
    })

    axios.get(`/places/current/${this.state.searchTerm}`)
      .then(({data}) => {
        console.log(data)
        this.setState({
          currWeather: data
        })
      })
      .catch(err => {
        console.log(err)
      })

      axios.get(`/places/forecast/${this.state.searchTerm}`)
      .then(({data}) => {
        this.setState({
          weatherForecast: data.list
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleUnits() {
    this.setState({
      isMetric: !this.state.isMetric
    })
  }

  futureForecast() {
    var dailyForecast = []
    for (var i = 0; i < this.state.weatherForecast.length; i += 8) {
      dailyForecast.push(this.state.weatherForecast[i])
    }
    console.log(dailyForecast)
    return dailyForecast
  }

  render() {
    return (
      <div>
        <Search
        currentCity={this.state.currentCity}
        searchTerm={this.state.searchTerm}
        searchCity={this.searchCity}
        searchSubmit={this.searchSubmit}
        />
        {this.confirmValidCity() && this.state.currWeather !== undefined && this.state.weatherForecast !== '' ?
        <div className='weather-container'>
          <WeatherDisplay
          currWeather={this.state.currWeather}
          isMetric={this.state.isMetric}
          toggleUnits={this.toggleUnits}
          weatherForecast={this.state.weatherForecast}
          futureForecast={this.futureForecast()}
          />
          {/* <WeeklyForecast
          weatherForecast={this.state.weatherForecast}
          isMetric={this.state.isMetric}
          futureForecast={this.futureForecast()}
          /> */}
        </div>
        : null
        }
      </div>
    )
  }
}

export default App