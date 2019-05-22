import Drawable from "./abstract/Drawable"
import Wheat from "./crops/Wheat"
import Corn from "./crops/Corn"
import Grass from "./crops/Grass"

class Field extends Drawable {
  image: any
  contents: any[]
  name: string
  crops: any[]
  isPettingFarm: boolean = false
  isGreenGasPlant: boolean = false

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = [],
    name: string = "",
    crops: any[] = []
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initalContents
    this.name = name
    this.crops = crops
  }

  public draw() {
    this.p5.stroke("#7c4011")
    this.p5.strokeWeight(10)
    this.p5.fill("#b58969")
    this.p5.rect(this.x, this.y, this.width, this.height, 10)

    for (var item of this.contents) {
      item.draw()
    }
  }

  convertToPettingFarm(){
    this.isPettingFarm = true
  }

  convertToGreenGasPlant(){
    this.isGreenGasPlant = true
  }

  plant(farm: any) {
    farm.plantWheat()
  }
}

export default Field
