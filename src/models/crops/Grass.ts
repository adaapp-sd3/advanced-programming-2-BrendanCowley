import Crop from "../abstract/Crop"
import Farm from "../Farm";

class Grass extends Crop {
  name: string = "Grass"
  genus: string = "Grasicus"
  imgUrl: string = "/img/twtr/1f33f.png"
  drinks: string = "water"
  thirst: number = 5
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if grass isn't watered well, yield less straw
  yieldStraw() {
    let amountOfStrawToYield = 5 - this.thirst
    this.farm.straw.total += Math.abs(amountOfStrawToYield)
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

export default Grass
