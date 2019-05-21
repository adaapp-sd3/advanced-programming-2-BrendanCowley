import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Chicken extends Animal {
  name: string = "Chicken"
  genus: string = "Chickenii"
  imgUrl: string = "/img/twtr/1f404.png"
  eats: string = "corn"
  hunger: number = 5
  farm: Farm

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if chicken is hungry, lay less eggs
  yieldEggs() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.eggs.total += Math.abs(amountOfEggsToYield)
    this.hunger = 5
  }

  // if chicken is thin, yield less chicken
  yieldChicken(): number {
    return this.hunger > 0 ? 100 / this.hunger : 120
  }

  eatCorn() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.corn.total > 0) {
        this.farm.corn.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        }

      }
    }
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  makeSound() {
    return "Bawkity"
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatCorn())
    this.stopForFarmer()

  }
}

export default Chicken
