import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value }, () => {
      this.props.handleChange(e.target.value);
    });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">ReactcolorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              defaultValue={level}
            />
          </div>
        </div>
        <div className="select-container">
          <Select onChange={this.handleChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - (255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;