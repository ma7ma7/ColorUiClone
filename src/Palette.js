import React, { Component } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxs = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div class="Palette">
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
            defaultValue={level}
          />
        </div>
        <div className="Palette-colors">{colorBoxs}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
