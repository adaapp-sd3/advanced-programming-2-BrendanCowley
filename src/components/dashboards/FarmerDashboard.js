import React, { Component } from 'react';

class FarmerDashboard extends Component {

  state = {
    weather: {
      weather:[{description: ''}],
      main:{temp: ''}
    }
  }

  hideUI = () => {
    this.props.farmer.showUI = false
  }

  getWeather = async () => {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3394578464a1554c3fb1c2d2e0ed6d7b')
      .then(response => response.json()
      )
      .then(response => this.setState({weather: response}))
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.getWeather()
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Current budget</dt><dd>{this.props.farmer.budget}</dd>
          {this.props.farmer.myFarm && (<>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <dt>Total straw</dt><dd>{this.props.farmer.myFarm.straw.total} bails</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
            <dt>Temperature</dt><dd>{(this.state.weather.main.temp - 273.15).toFixed(1) + '° C'}</dd>
            <dt>Conditions</dt><dd>{this.state.weather.weather[0].description}</dd>
            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;