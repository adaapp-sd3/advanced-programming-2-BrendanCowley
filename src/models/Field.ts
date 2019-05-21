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
    this.crops = []
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

  plant(x: number, y: number, farm: any) {
    console.log("new plant")
    // Get the crop name from the field name
    // var cropName = this.name.split(" ") // => e.g. "Wheat"
    let cropName = this.name.split(" ")
    // // Add a new crop to the field's list of crops
    // this.crops.push(new Crop(cropName[0], this, x, y))
    if(cropName[0] === "Wheat"){
      this.crops.push(new Wheat(farm))
    }
    if(cropName[0] === "Corn"){
      this.crops.push(new Corn(farm))
    }
    if(cropName[0] === "Grass"){
      this.crops.push(new Grass(farm))
    }
  }
}

export default Field
