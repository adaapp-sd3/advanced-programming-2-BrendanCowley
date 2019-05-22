import React, { Component } from "react"
import Field from "./../../models/Field"

class MarketDashboard extends Component {

  buyItem = item => {
    if (item === "seeds") {
      if(this.props.currentFarmer.budget >= this.props.market.grassSeedPrice) {
        this.props.market.currentFarmer.myFarm.seeds.total += 1
        this.props.market.currentFarmer.budget -= this.props.market.grassSeedPrice
      }
    }
    if (item === "solar panel") {
      if(this.props.currentFarmer.budget >= this.props.market.solarPanelPrice) {
        this.props.market.currentFarmer.myFarm.solarPanels.total += 1
        this.props.market.currentFarmer.budget -= this.props.market.solarPanelPrice
      }
    }
    if (item === "land") {
      if(this.props.currentFarmer.budget >= this.props.market.landPrice) {
        this.props.market.currentFarmer.myFarm.availableLand.total += 1
        this.props.market.currentFarmer.budget -= this.props.market.landPrice
      }
    }
    if (item === "green gas equipment") {
      if(this.props.currentFarmer.budget >= this.props.market.greenGasEquipmentPrice) {
        this.props.market.currentFarmer.myFarm.greenGasEquipment.total += 1
        this.props.market.currentFarmer.budget -= this.props.market.greenGasEquipmentPrice
      }
    }
    if (item === "petting farm equipment") {
      if(this.props.currentFarmer.budget >= this.props.market.pettingFarmEquipmentPrice) {
        this.props.market.currentFarmer.myFarm.pettingFarmEquipment.total += 1
        this.props.market.currentFarmer.budget -= this.props.market.pettingFarmEquipmentPrice
      }
    }
  }

  sellItem = item => {
    if (item === "milk") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.milk.total *
        this.props.market.milkPrice
      this.props.market.currentFarmer.myFarm.milk.total = 0
    }
    if (item === "beef") {
      this.props.market.currentFarmer.budget += this.props.market.beefPrice
      this.props.market.currentFarmer.myFarm.cows.total -= 1
    }
    if (item === "egg") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.eggs.total *
        this.props.market.eggPrice
      this.props.market.currentFarmer.myFarm.eggs.total = 0
    }
    if (item === "chicken") {
      this.props.market.currentFarmer.budget += this.props.market.chickenPrice
      this.props.market.currentFarmer.myFarm.chickens.total -= 1
    }
    if (item === "wool") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.wool.total *
        this.props.market.woolPrice
      this.props.market.currentFarmer.myFarm.wool.total = 0
    }
    if (item === "lamb") {
      this.props.market.currentFarmer.budget += this.props.market.lambPrice
      this.props.market.currentFarmer.myFarm.sheep.total -= 1
    }
    if (item === "green gas") {
      this.props.market.currentFarmer.budget +=
        this.props.market.currentFarmer.myFarm.greenGas.total *
        this.props.market.greenGasPrice
      this.props.market.currentFarmer.myFarm.greenGas.total = 0
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
          <dt>Green gas generator equipment</dt>
          <dd>
            <button onClick={() => this.buyItem("green gas equipment")}>
              Buy green gas equipment for {this.props.market.greenGasEquipmentPrice}
            </button>
          </dd>
          <dt>Petting farm equipmnt</dt>
          <dd>
            <button onClick={() => this.buyItem("petting farm equipment")}>
              Buy green gas for {this.props.market.pettingFarmEquipmentPrice}
            </button>
          </dd>
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
          <dt>Chicken</dt>
          <button onClick={() => this.sellItem("chicken")}>
              Sell chicken for {this.props.market.chickenPrice} per chicken
          </button>
          <dt>Eggs</dt>
          <button onClick={() => this.sellItem("egg")}>
              Sell eggs for {this.props.market.eggPrice} per egg
          </button>
          <dt>Lamb</dt>
          <button onClick={() => this.sellItem("lamb")}>
              Sell lamb for {this.props.market.lambPrice} per sheep
          </button>
          <dt>Wool</dt>
          <button onClick={() => this.sellItem("wool")}>
              Sell wool for {this.props.market.woolPrice} per bunch
          </button>
          <dt>Green Gas</dt>
          <button onClick={() => this.sellItem("green gas")}>
              Sell green gas for {this.props.market.greenGasPrice} per gas
          </button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
