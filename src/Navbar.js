import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
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
      </header>
    );
  }
}

export default Navbar;
