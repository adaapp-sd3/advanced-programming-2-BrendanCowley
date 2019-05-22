import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import p5 from "p5"
import makeFarm from "./p5Setup"
import Farm from "./models/Farm"
import Farmer from "./models/Farmer"
import Market from "./models/Market"
import firebase from "firebase";

class App extends Component {
  // all instances live on the state
  constructor(){
    super()
    this.state = {
      farmer: new Farmer(),
      farm: new Farm(),
      market: new Market(),
      name: ""
    }
  }

  // TODO: refactor code to save state (firebase can't save functions)
  saveFarm = () => {
    const farm = firebase.database().ref("farms");
    //farm.push({name: this.state.name,cows: this.state.farm});
  };

  loadFarm = () => {
    const farms = firebase.database().ref("farms");
    // farms.on("value", snapshot => {
    //   let farms = snapshot.val().filter(item => item.name === this.state.name);
    //   this.setState({
    //     farm: farms.reverse()[0].farm
    //   });
    // });
  }

  // allow instances to to tell us when they change
  handleUpdateState = newThing => {
    this.setState(newThing)
  }

  //
  componentDidMount() {
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    })
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{" "}
            Dashboard
            <p>Name:</p><input value={this.state.name} onChange={this.handleNameChange}/>
            <button onClick={this.saveFarm}>Save</button>
            <button onClick={this.loadFarm}>Load</button>
          </h2>
        </header>
        <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
      </div>
    )
  }
}

export default App
