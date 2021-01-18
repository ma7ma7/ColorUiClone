import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxs = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    return (
      <div class="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxs}</div>
        <div className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </div>
      </div>
    );
  }
}

export default Palette;
