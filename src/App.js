import React, { Component } from "react";
import Pallete from "./Palette.js";
import seedColors from "./seedColors.js";

class App extends Component {
  render() {
    return <Pallete {...seedColors[4]} />;
  }
}

export default App;
