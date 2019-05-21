import React, { Component } from "react"
import Field from "./../../models/Field"

class MarketDashboard extends Component {

  buyItem = item => {
    if (item === "seeds") {
      this.props.market.currentFarmer.myFarm.seeds.total =
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice
      console.log(this.props.market.currentFarmer.myFarm.seeds)
      this.props.market.currentFarmer.budget = 0
    }
    if (item === "solar panel") {
      this.props.market.currentFarmer.myFarm.solarPanels.total =
        this.props.market.currentFarmer.budget *
        this.props.market.solarPanelPrice
      console.log(this.props.market.currentFarmer.myFarm.solarPanels)
      this.props.market.currentFarmer.budget = 0
    }
    if (item === "land") {
      this.props.market.currentFarmer.myFarm.fields.push(new Field(475, 450, 300, 125))
        // this.props.market.currentFarmer.budget *
        // this.props.market.landPrice
      console.log(this.props.market.currentFarmer.myFarm.fields)
      this.props.market.currentFarmer.budget = 0
    }
  }

  sellItem = item => {
    if (item === "milk") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.milk.total *
        this.props.market.milkPrice
      console.log(this.props.market.currentFarmer.myFarm.milk)
      this.props.market.currentFarmer.myFarm.milk.total = 0
    }
    if (item === "beef") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.cows.total *
        this.props.market.beefPrice
      console.log(this.props.market.currentFarmer.myFarm.cows)
      this.props.market.currentFarmer.myFarm.cows.total = 0
    }
    if (item === "egg") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.eggs.total *
        this.props.market.eggPrice
      console.log(this.props.market.currentFarmer.myFarm.eggs)
      this.props.market.currentFarmer.myFarm.eggs.total = 0
    }
    if (item === "chicken") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.chickens.total *
        this.props.market.chickenPrice
      console.log(this.props.market.currentFarmer.myFarm.chickens)
      this.props.market.currentFarmer.myFarm.chickens.total = 0
    }
    if (item === "wool") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.wool.total *
        this.props.market.woolPrice
      console.log(this.props.market.currentFarmer.myFarm.wool)
      this.props.market.currentFarmer.myFarm.wool.total = 0
    }
    if (item === "lamb") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.sheep.total *
        this.props.market.lambPrice
      console.log(this.props.market.currentFarmer.myFarm.sheep)
      this.props.market.currentFarmer.myFarm.sheep.total = 0
    }
  }

  render() {
    return (
      <div className="MarketDashboard">
        <h2>Market</h2>
        <p>Welcome to the market! See our prices below:</p>
        <h3>Buy</h3>
        <dl>
          <dt>Seeds</dt>
          <dd>
            <button onClick={() => this.buyItem("seeds")}>
              Buy seeds for {this.props.market.grassSeedPrice}
            </button>
          </dd>
          <dt>Solar panels</dt>
          <dd>
            <button onClick={() => this.buyItem("solar panel")}>
              Buy solar panels for {this.props.market.solarPanelPrice}
            </button>
          </dd>
          <dt>Land</dt>
          <dd>
            <button onClick={() => this.buyItem("land")}>
              Buy land for {this.props.market.landPrice}
            </button>
          </dd>
          {/* <dt>Green gas</dt>
          <dd>
            <button onClick={() => this.buyItem("green gas")}>
              Buy green gas for {this.props.market.greenGasPrice}
            </button>
          </dd> */}
        </dl>
        <h3>Sell</h3>
        <dl>
          <dt>Milk</dt>
          <button onClick={() => this.sellItem("milk")}>
              Sell milk for {this.props.market.milkPrice} per pint
          </button>
          <dt>Beef</dt>
          <button onClick={() => this.sellItem("beef")}>
              Sell beef for {this.props.market.beefPrice} per cow
          </button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
