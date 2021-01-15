import React, { Component } from "react";
import MiniPalette from "./MiniPalette.js";
class PaletteList extends Component {
  render() {
    return (
      <div>
        {this.props.palettes.map((palette) => {
          return <MiniPalette {...palette} />;
        })}
      </div>
    );
  }
}
export default PaletteList;
