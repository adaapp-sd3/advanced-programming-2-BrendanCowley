import React, { Component } from "react"

class FieldDashboard extends Component {

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  plantWheat = () => {
    this.props.field.plant(this.props.farmer.myFarm)
  }

  makeBread = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldBread()
    }
    this.props.field.contents = []
  }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s
            {this.props.field.contents[0].name === "Cow" && (
              <button onClick={this.milkCows}>Milk them</button>
            )}
          </p>

        )}
        {this.props.field.name === "Wheat" &&
          (<p>
            <button onClick={this.plantWheat}>Plant wheat</button>
            {this.props.field.contents[0] && (
              <button onClick={this.makeBread}>Make Bread</button>
            )}
          </p>
          )
        }
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard
