import React from 'react';
import Day from './Day.jsx';

class WeeklyForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='forecast-container'>
        {console.log(this.props.futureForecast)}
        { this.props.futureForecast.map((day, index) => {
          {console.log(day)}
          return (
            <Day
            day={day}
            index={index}
            isMetric={this.props.isMetric}
            />
          )
        })
        }
      </div>
    )
  }
}

export default WeeklyForecast;