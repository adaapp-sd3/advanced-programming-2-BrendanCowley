import Crop from "../abstract/Crop"
import Farm from "../Farm";

class Corn extends Crop {
  name: string = "Corn"
  genus: string = "Cornea"
  imgUrl: string = "/img/twtr/1f33d.png"
  drinks: string = "water"
  thirst: number = 5
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if corn isn't watered well, yield less corn
  yieldCorn() {
    let amountOfCornToYield = 5 - this.thirst
    this.farm.corn.total += Math.abs(amountOfCornToYield)
    this.thirst = 5
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  public draw(): any {

    this.constrainItem()

  }
}

export default Corn
