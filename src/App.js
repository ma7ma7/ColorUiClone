import React, { Component } from "react";
import Pallete from "./Palette.js";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return <Pallete {...seedColors[4]} />;
  }
}

export default App;
