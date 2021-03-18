import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './components/Palette.js';
import PaletteList from './components/PaletteList.js';
import seedColors from './components/seedColors.js';
import SingleColorPalette from './components/SingleColorPalette.js';
import { generatePalette } from './components/colorHelpers';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={(propParams) => (
            <Pallete
              palette={generatePalette(
                this.findPalette(propParams.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
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
