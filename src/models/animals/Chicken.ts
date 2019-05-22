import Animal from "../abstract/Animal"
import Farm from "../Farm";

class Chicken extends Animal {
  name: string = "Chicken"
  genus: string = "Chickenii"
  imgUrl: string = "/img/twtr/1f413.png"
  eats: string = "corn"
  hunger: number = 5
  farm: Farm
  timeHungry: number = 0

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
  }

  makeSound() {
    return "Bawkity"
  }

  checkIfDead() {
    if(this.hunger === 5 && this.timeHungry === 0){
      this.timeHungry = this.p5.millis()
    }
    if(this.p5.millis() - this.timeHungry >= 3 * 60 * 1000 && this.timeHungry !== 0){
      this.farm.chickens.objects.pop()
      this.farm.chickens.total -= 1
    }
    if(this.hunger < 5){
      this.timeHungry = 0
    }
  }

  public draw(): any {

    this.checkIfDead()
    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatCorn())
    this.stopForFarmer()

  }
}

export default Chicken
