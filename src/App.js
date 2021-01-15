import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Palette.js";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Pallet List</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={(propParams) => (
            <Pallete
              palette={generatePalette(
                this.findPalette(propParams.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <Pallete palette={generatePalette(seedColors[4])} />;
    );
  }
}

export default App;
