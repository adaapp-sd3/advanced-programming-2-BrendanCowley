import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Cow extends Animal {
  name: string = "Cow"
  genus: string = "Cows"
  imgUrl: string = "/img/twtr/1f404.png"
  eats: string = "straw"
  hunger: number = 5
  farm: Farm
  timeHungry: number = 0

  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if cow is hungry, yield less milk
  yieldMilk() {
    let amountOfMilkToYield = 5 - this.hunger
    this.farm.milk.total += Math.abs(amountOfMilkToYield)
    this.hunger = 5
  }

  // if cow is thin, yield less beef
  yieldBeef(): number {
    return this.hunger > 0 ? 100 / this.hunger : 120
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--
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
    return "Moooo"
  }

  public draw(): any {

    this.checkIfDead(this.hunger)
    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatStraw())
    this.stopForFarmer()

  }
}

export default Cow
