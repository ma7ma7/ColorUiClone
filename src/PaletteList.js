import React, { Component } from "react";
import MiniPalette from "./MiniPalette.js";
import { Link } from "react-router-dom";
class PaletteList extends Component {
  render() {
    return (
      <div>
        <MiniPalette />
        {this.props.palettes.map((palette) => {
          return (
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}
export default PaletteList;
