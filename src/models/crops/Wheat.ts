import Crop from "../abstract/Crop"
import Farm from "../Farm";

class Wheat extends Crop {
  name: string = "Wheat"
  genus: string = "Wheatabix"
  imgUrl: string = "/img/twtr/1f33e.png"
  drinks: string = "water"
  thirst: number = 5
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if Wheat isn't watered well, yield less Wheat
  yieldBread() {
    let amountOfBreadToYield = 5 - this.thirst
    this.farm.bread.total += Math.abs(amountOfBreadToYield)
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

export default Wheat
