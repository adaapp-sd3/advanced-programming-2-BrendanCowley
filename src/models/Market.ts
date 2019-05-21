import Drawable from "./abstract/Drawable"
import Farmer from './Farmer';

class Market extends Drawable {
  imgUrl = "/img/twtr/1f3e2.png"
  currentFarmer!: Farmer

  greenGasDemand: number = 100
  milkDemand: number = 75
  beefDemand: number = 75

  milkPrice: number = 1
  eggPrice: number = 1
  woolPrice: number = 5
  beefPrice: number = 25
  chickenPrice: number = 15
  lambPrice: number = 20
  greenGasPrice: number = 10

  greenGasEquipmentPrice: number = 10000
  pettingFarmEquipmentPrice: number = 10000

  solarPanelPrice: number = 10000

  grassSeedPrice: number = 1

  landPrice: number = 100000

  constructor() {
    super()
    this.x = 600
    this.y = 500
    this.width = 60
    this.height = 60
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height)
  }
}

export default Market
