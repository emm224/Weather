import React from 'react';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    // this.convertToCels = this.convertToCels.bind(this);
  }

  convertToCels(temp) {
    return Math.round(((temp - 32) * 5) / 9)
  }

  render() {
    return (
      <div className='temperature-container'>
        {!this.props.isMetric ?
          <div className='farenheit'>
            <div className='temperature-display'>{Math.round(this.props.currWeather.main.temp)}</div>
            <p className='degrees'>
              <sup>o</sup>
            </p>
            <div className='unit'>
              <div id='selected' className='imperial'>F</div>
              <div className='split'>|</div>
              <div id='not-selected' className='metric' onClick={this.props.toggleUnits}>C</div>
            </div>
          </div>
          :
          <div className='celsius'>
            <div className='temperature-display'>{this.convertToCels(this.props.currWeather.main.temp)}</div>
            <p className='degrees'>
              <sup>o</sup>
            </p>
            <div className='unit'>
              <div id='not-selected' className='imperial' onClick={this.props.toggleUnits}>F</div>
              <div className='split'>|</div>
              <div id='selected' className='metric' >C</div>
            </div>
          </div>

        }
      </div>
    )
  }
}

export default Temperature;