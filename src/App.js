import React, { Component } from "react";
import Pallete from "./Palette.js";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return <Pallete palette={generatePalette(seedColors[4])} />;
  }
}

export default App;
