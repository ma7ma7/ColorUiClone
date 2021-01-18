import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allCollors = palette.colors;

    for (let key in allCollors) {
      shades = shades.concat(
        allCollors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  render() {
    const colorBoxs = this._shades.map((shade) => (
      <ColorBox
        background={shade.hex}
        name={shade.name}
        showLink={false}
        key={shade.id}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color</h1>
        <div className="Palette-colors">{colorBoxs}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
