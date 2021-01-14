import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
