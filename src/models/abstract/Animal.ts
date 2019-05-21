import ConstrainedByField from './ConstrainedByField';

abstract class Animal extends ConstrainedByField {
  abstract makeSound(): void
  height = 16
  width = 16
  health: number = 10
  alive: boolean = true
  timeHungry: number = 0
  move(): string {
    return "roaming the earth..."
  }
  checkIfDead(hunger: number) {
    if(hunger === 5 && this.timeHungry !== 0){
      this.timeHungry = this.p5.millis()
    }
    if(this.p5.millis() - this.timeHungry >= 3 * 60 * 1000 && this.timeHungry !== 0){
      this.alive = false
    }
    if(hunger < 5){
      this.timeHungry = 0
    }
  }
}

export default Animal;
