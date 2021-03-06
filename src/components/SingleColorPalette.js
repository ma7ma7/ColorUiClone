import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxs = this._shades.map((shade) => (
      <ColorBox
        isSingleColorPallete={true}
        background={shade[format]}
        name={shade.name}
        showLink={false}
        key={shade.name}
      />
    ));
    return (
      <div className="SingleColorPallete Palette">
        <Navbar handleChange={this.changeFormat} isSingleColorShades={false} />
        <div className="Palette-colors">
          {colorBoxs}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="goback-button">
              Go back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
